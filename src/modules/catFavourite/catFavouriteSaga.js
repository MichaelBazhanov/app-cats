import { serverSendCatFavourite, serverDeleteCatFavourite } from "../../api";
import { call, put, select, takeEvery } from "redux-saga/effects";

import {
  SET_CAT_FAVOURITE,
  catFavouriteSuccess,
  catFavouriteFailure,
} from "./actions";
import {
  DELETE_CAT_FAVOURITE,
  deleteCatFavouriteSuccess,
  deleteCatFavouriteFailure,
} from "./actions";
import { showNotification } from "../tooltips"; // success or warning or error

const getFavouriteId = (state) => state.catFavouriteReducer.catFavourite;

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteAdd(action) {
  // console.log("catFavouriteSaga : catFavouriteAdd", action.payload);

  try {
    const { catId, favouriteId, image_id } = action.payload;

    if (favouriteId) {
      const {
        success: { id: newFavouriteId },
        error,
      } = yield call(serverSendCatFavourite, image_id);

      if (error) throw new Error();

      yield put(
        catFavouriteSuccess({ catId: image_id, favouriteId: newFavouriteId })
      ); // id image for id favourite
      yield put(
        showNotification({
          type: "success",
          text: "The pet has been added to favourites.", //Pet was removed from favourites
        })
      );
    } else {
      let {
        success: { id },
      } = yield call(serverSendCatFavourite, catId);

      if (id) {
        yield put(catFavouriteSuccess({ catId: catId, favouriteId: id })); // id image for id favourite
        yield put(
          showNotification({
            type: "success",
            text: "The pet has been added to favourites.", //Pet was removed from favourites
          })
        );
      } else {
        yield put(catFavouriteFailure(new Error("error").message));
        yield put(
          showNotification({
            type: "warning",
            text: "Strange data from the server.",
          })
        );
      }
    }
  } catch (error) {
    console.log(error);
    yield put(catFavouriteFailure(error));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteSaga() {
  yield takeEvery(SET_CAT_FAVOURITE, catFavouriteAdd);
}
//====================================================================

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteDelete(action) {
  // console.log("catFavouriteSaga : catFavouriteDelete", action.payload);

  try {
    const { catId, favouriteId, image_id } = action.payload;

    if (favouriteId) {
      const favouritesArray = yield select(getFavouriteId);
      const favouriteArray = favouritesArray.filter(
        (element) => element.catId === image_id
      );

      //first state
      if (favouriteArray.length === 0) {
        let { success, error } = yield call(
          serverDeleteCatFavourite,
          favouriteId
        );

        if (error) throw new Error().message;

        yield put(deleteCatFavouriteSuccess({ catId: "" }));
        yield put(
          showNotification({
            type: "success",
            text: "Pet was removed from favourites.", // The pet has been added to favourites
          })
        );
      }

      // new state
      if (favouriteArray.length === 1) {
        const newFavouriteId =
          favouriteId !== favouriteArray[0].favouriteId
            ? favouriteArray[0].favouriteId
            : favouriteId;

        let { success, error } = yield call(
          serverDeleteCatFavourite,
          newFavouriteId
        );

        if (error) throw new Error().message;

        yield put(deleteCatFavouriteSuccess({ catId: image_id }));
        yield put(
          showNotification({
            type: "success",
            text: "Pet was removed from favourites.", // The pet has been added to favourites
          })
        );
      }
    } else {
      const favouritesArray = yield select(getFavouriteId);

      const favouriteArray = favouritesArray.filter(
        (element) => element.catId === catId
      );

      if (favouriteArray.length !== 1) throw new Error();

      const { error } = yield call(
        serverDeleteCatFavourite,
        favouriteArray[0].favouriteId
      );

      if (error) throw new Error();

      yield put(deleteCatFavouriteSuccess({ catId: catId }));
      yield put(
        showNotification({
          type: "success",
          text: "Pet was removed from favourites.", // The pet has been added to favourites
        })
      );
    }
  } catch (error) {
    console.log(error);
    yield put(deleteCatFavouriteFailure(error.message));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* deleteCatFavouriteSaga() {
  yield takeEvery(DELETE_CAT_FAVOURITE, catFavouriteDelete);
}
//====================================================================
