import {
  serverGetCats,
  serverSendCatFavourite,
  serverDeleteCatFavourite,
} from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CATS,
  catsSuccess,
  catsFailure,
  ADD_CAT_FAVOURITES,
  addCatFavouritesSuccess,
  addCatFavouritesFailure,
  REMOVE_CAT_FAVOURITES,
  removeCatFavouritesSuccess,
  removeCatFavouritesFailure,
} from "./actions";
import { showNotification } from "../tooltips"; // success or warning or error

//======================================================= ТЕСТИРОВАНИЕ
export function* cats(action) {
  try {
    const { quantity } = action.payload;

    let { success, error } = yield call(serverGetCats, quantity);

    if (error) throw new Error(error);

    success = success.map(({ id, url }) => {
      return {
        id: 0,
        image_id: id,
        url,
        isFavourite: false,
        favoured: false,
      };
    });

    yield put(catsSuccess(success));
  } catch (error) {
    console.log(error);
    yield put(catsFailure(error.message));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catsSaga() {
  yield takeEvery(GET_CATS, cats);
}
//====================================================================

//======================================================= ТЕСТИРОВАНИЕ
export function* addCats(action) {
  // console.log("ADD_CAT_FAVOURITES- action.payload :", action.payload);
  try {
    const { image_id } = action.payload;

    const {
      success: { id },
      error,
    } = yield call(serverSendCatFavourite, image_id);

    if (error) throw new Error(error);

    yield put(
      addCatFavouritesSuccess({
        id,
        image_id,
        isFavourite: true,
      })
    );

    yield put(
      showNotification({
        type: "success",
        text: "The pet has been added to favourites.", //Pet was removed from favourites
      })
    );
  } catch (error) {
    console.log(error);
    yield put(addCatFavouritesFailure(error.message));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* addCatsSaga() {
  yield takeEvery(ADD_CAT_FAVOURITES, addCats);
}
//====================================================================
//======================================================= ТЕСТИРОВАНИЕ
export function* removeCats(action) {
  // console.log("REMOVE_CAT_FAVOURITES - removeCats :", action.payload);
  try {
    const { id } = action.payload;

    const { error } = yield call(serverDeleteCatFavourite, id);

    if (error) throw new Error(error);

    yield put(removeCatFavouritesSuccess({ id, isFavourite: false }));

    yield put(
      showNotification({
        type: "success",
        text: "Pet was removed from favourites.", // The pet has been added to favourites
      })
    );
  } catch (error) {
    console.log(error);
    yield put(removeCatFavouritesFailure(error.message));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* removeCatsSaga() {
  yield takeEvery(REMOVE_CAT_FAVOURITES, removeCats);
}
//====================================================================
