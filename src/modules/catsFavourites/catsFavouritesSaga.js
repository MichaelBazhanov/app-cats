import { serverGetCatsFavourites } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CATS_FAVOURITES,
  catsFavouritesSuccess,
  catsFavouritesFailure,
} from "./actions";

//======================================================= ТЕСТИРОВАНИЕ
export function* catsFavourites(action) {
  try {
    const { quantity } = action.payload;
    console.log(quantity);

    let { success } = yield call(serverGetCatsFavourites, quantity);

    if (success) {
      // перерабатываем данные у удобном для нас виде ======
      success = success.map(({ id, url }) => {
        return { id, url };
      });
      // перерабатываем данные у удобном для нас виде ======

      yield put(catsFavouritesSuccess(success));
    } else {
      yield put(catsFavouritesFailure(new Error("error").message));
    }
  } catch (error) {
    yield put(catsFavouritesFailure(error.response));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catsFavouritesSaga() {
  yield takeEvery(GET_CATS_FAVOURITES, catsFavourites);
}
//====================================================================
