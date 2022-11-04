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

    let { success } = yield call(serverGetCatsFavourites, quantity);

    // перерабатываем данные в удобном для нас виде ======
    const successForFavourites = success.map(
      ({ id, image: { url }, image: { id: image_id } }) => {
        return { id, url, activeHeart: true, favourite: true, image_id };
      }
    );
    // перерабатываем данные в удобном для нас виде ======

    if (success) {
      yield put(catsFavouritesSuccess(successForFavourites));
    } else {
      yield put(catsFavouritesFailure(new Error("error").message));
    }
  } catch (error) {
    console.log(error)
    yield put(catsFavouritesFailure(error.response));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catsFavouritesSaga() {
  yield takeEvery(GET_CATS_FAVOURITES, catsFavourites);
}
//====================================================================
