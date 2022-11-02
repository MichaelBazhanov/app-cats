import { serverSendCatFavourite, serverDeleteCatFavourite } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";

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

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavourite(action) {
  try {
    const { catId } = action.payload;

    let {
      success: { id },
    } = yield call(serverSendCatFavourite, catId);

    if (id) {
      yield put(catFavouriteSuccess({ catId: catId, favouriteId: id })); // id image for id favourite
    } else {
      yield put(catFavouriteFailure(new Error("error").message));
    }
  } catch (error) {
    yield put(catFavouriteFailure(error.response));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteSaga() {
  yield takeEvery(SET_CAT_FAVOURITE, catFavourite);
}
//====================================================================

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteDelete(action) {
  try {
    const { favouriteId } = action.payload;

    let a = yield call(serverDeleteCatFavourite, favouriteId);
    console.log('delete ====', a);
    // if (id) {
    //   yield put(deleteCatFavouriteSuccess(id));
    // } else {
    //   yield put(deleteCatFavouriteFailure(new Error("error").message));
    // }
  } catch (error) {
    // yield put(deleteCatFavouriteFailure(error.response));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* deleteCatFavouriteSaga() {
  yield takeEvery(DELETE_CAT_FAVOURITE, catFavouriteDelete);
}
//====================================================================
