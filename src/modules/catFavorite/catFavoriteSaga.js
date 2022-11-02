import { serverSendCatFavorite } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";

import { SET_CAT_FAVORITE, catFavoriteSuccess, catFavoriteFailure } from "./actions";

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavorite(action) {
  try {
    const { catImageId } = action.payload;

    let {
      success: { id },
    } = yield call(serverSendCatFavorite, catImageId);

    if (id) {
      yield put(catFavoriteSuccess(id));
    } else {
      yield put(catFavoriteFailure(new Error("error").message));
    }
  } catch (error) {
    yield put(catFavoriteFailure(error.response));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catFavoriteSaga() {
  yield takeEvery(SET_CAT_FAVORITE, catFavorite);
}
//====================================================================
