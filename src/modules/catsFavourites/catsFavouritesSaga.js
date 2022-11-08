import { serverGetCatsFavourites } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CATS_FAVOURITES,
  catsFavouritesSuccess,
  catsFavouritesFailure,
} from "./actions";
import { showNotification } from "../tooltips"; // success or warning or error

//======================================================= ТЕСТИРОВАНИЕ
export function* catsFavourites(action) {
  try {
    const { quantity } = action.payload;

    let { success, error } = yield call(serverGetCatsFavourites, quantity);

    if (error) throw new Error(error);

    success = success.map(({ id, image: { url }, image: { id: image_id } }) => {
      return { id, url, activeHeart: true, favourite: true, image_id };
    });

    yield put(catsFavouritesSuccess(success));
  } catch (error) {
    console.log(error);

    yield put(catsFavouritesFailure(error.message));

    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catsFavouritesSaga() {
  yield takeEvery(GET_CATS_FAVOURITES, catsFavourites);
}
//====================================================================
