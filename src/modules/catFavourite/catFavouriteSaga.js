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

const getFavouriteIdForRemoved = (state) =>
  state.catFavouriteReducer.catFavourite;

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteDelete(action) {
  try {
    const { catId } = action.payload;

    // Получение ID котика для удаления ID фаворитного котика
    const favouritesArray = yield select(getFavouriteIdForRemoved);

    // Перебираем данные и находим нужный id
    const favouriteArray = favouritesArray.filter(
      (element) => element.catId === catId
    );

    if (favouriteArray.length !== 1)
      yield put(deleteCatFavouriteFailure(new Error("error").message));

    let {
      success: { message },
    } = yield call(serverDeleteCatFavourite, favouriteArray[0].favouriteId);

    if (message !== "SUCCESS")
      yield put(deleteCatFavouriteFailure(new Error("error").message));

    yield put(deleteCatFavouriteSuccess(catId));
  } catch (error) {
    yield put(deleteCatFavouriteFailure(error.response));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* deleteCatFavouriteSaga() {
  yield takeEvery(DELETE_CAT_FAVOURITE, catFavouriteDelete);
}
//====================================================================
