import { serverSendCatFavourite } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";

import { SET_CAT_FAVOURITE, catFavouriteSuccess, catFavouriteFailure } from "./actions";

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavourite(action) {
  try {
    const { catImageId } = action.payload;

    let {
      success: { id },
    } = yield call(serverSendCatFavourite, catImageId);

    if (id) {
      yield put(catFavouriteSuccess(id));
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
