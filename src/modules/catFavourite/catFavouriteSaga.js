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
import {
  updateCatFavourite,
  updateCatFavouriteSuccess,
  updateCatFavouriteFailure,
} from "../catsFavourites";
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

      // ID постоянно меняется после удаления
      // Обновляем ID обьекта в главном редьюсере catsFavouritesReducer -> catsFavourites
      yield put(updateCatFavouriteSuccess({favouriteId: newFavouriteId, image_id: image_id}))

      yield put(
        catFavouriteSuccess({ catId: image_id, favouriteId: newFavouriteId, activeFavourite: true })
      );
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
        yield put(catFavouriteSuccess({ catId: catId, favouriteId: id, activeFavourite: true })); // id image for id favourite
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
      let catFavouriteFilter = [];

      const catFavouriteReducer = yield select(getFavouriteId);

      const catFavourite = catFavouriteReducer.filter(
        (element) => element.catId === image_id
      );

      if (catFavourite.length > 0) { // Если я свой id нашел в массиве
        catFavouriteFilter = catFavouriteReducer.map((e) => {
          if(e.catId === catId) {
            return {catId: e.catId, favouriteId: favouriteId, activeFavourite: false}
          } else {
            return {catId: e.catId, favouriteId: e.favouriteId, activeFavourite: e.activeFavourite}
          }
        })
      } else { // Если я свой id НЕ нашел в массиве
        console.log('пустой массив 123')
        catFavouriteFilter = [...catFavouriteReducer, { catId: image_id, favouriteId, activeFavourite: false }];
      }

      let { success, error } = yield call(
        serverDeleteCatFavourite,
        favouriteId
      );

      if (error) throw new Error().message;

      yield put(deleteCatFavouriteSuccess({data: catFavouriteFilter}));
      yield put(
        showNotification({
          type: "success",
          text: "Pet was removed from favourites.", // The pet has been added to favourites
        })
      );

    } else {
      const catFavouriteReducer = yield select(getFavouriteId);

      const catFavourite= catFavouriteReducer.filter(
        (element) => element.catId === catId
      );

      const {catId: catId_, favouriteId: favouriteId_, activeFavourite: activeFavourite_} = catFavourite[0];

      if (favouriteId_.length === 0) throw new Error();

      const { error, success } = yield call(
        serverDeleteCatFavourite,
        favouriteId_
      );

      if (error) throw new Error();

      const catFavouriteFilter = catFavouriteReducer.map((e)=>{
        if(e.catId === catId) {
          return {catId: e.catId, favouriteId: e.favouriteId, activeFavourite: false}
        } else {
          return {catId: e.catId, favouriteId: e.favouriteId, activeFavourite: e.activeFavourite}
        }
      })

      yield put(deleteCatFavouriteSuccess({data: catFavouriteFilter}));
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
