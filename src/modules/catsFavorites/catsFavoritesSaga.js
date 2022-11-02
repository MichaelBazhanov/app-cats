import { serverGetCatsFavorites, serverSendCatFavorite } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CATS_FAVORITES,
  catsFavoritesSuccess,
  catsFavoritesFailure,
} from "./actions";

import { SET_CAT_FAVORITE, catFavoriteSuccess, catsFailure } from "./actions";

//======================================================= ТЕСТИРОВАНИЕ
export function* catsFavorites(action) {
  try {
    const { quantity } = action.payload;
    console.log(quantity);

    let { success } = yield call(serverGetCatsFavorites, quantity);

    if (success) {
      // перерабатываем данные у удобном для нас виде ======
      success = success.map(({ id, url }) => {
        return { id, url };
      });
      // перерабатываем данные у удобном для нас виде ======

      yield put(catsFavoritesSuccess(success));
    } else {
      yield put(catsFavoritesFailure(new Error("error").message));
    }
  } catch (error) {
    yield put(catsFavoritesFailure(error.response));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catsFavoritesSaga() {
  yield takeEvery(GET_CATS_FAVORITES, catsFavorites);
}
//====================================================================
