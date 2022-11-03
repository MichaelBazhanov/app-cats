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
//Добавление фаворитов по клику просит CatId
export function* catFavouriteAdd(action) {
  console.log('catFavouriteSaga : catFavouriteAdd',action.payload);

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
    yield put(catFavouriteFailure(error));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteSaga() {
  yield takeEvery(SET_CAT_FAVOURITE, catFavouriteAdd);
}
//====================================================================

const getFavouriteIdForRemoved = (state) =>
  state.catFavouriteReducer.catFavourite;

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteDelete(action) {
  console.log('catFavouriteSaga : catFavouriteDelete',action.payload);

  try {
    const { catId, favouriteId } = action.payload;

    if (favouriteId) {
      yield call(serverDeleteCatFavourite, favouriteId); // ID фавориткого котика уже получен
    } else {
      // Получение ID котика для удаления ID фаворитного котика
      const favouritesArray = yield select(getFavouriteIdForRemoved);

      // Перебираем данные и находим нужный id
      const favouriteArray = favouritesArray.filter(
        (element) => element.catId === catId
      );

      if (favouriteArray.length !== 1) throw new Error();

      const { error } = yield call(
        serverDeleteCatFavourite,
        favouriteArray[0].favouriteId
      );

      if (error) throw new Error();

      yield put(deleteCatFavouriteSuccess(catId));
    }
  } catch (error) {
    yield put(deleteCatFavouriteFailure(error.message));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* deleteCatFavouriteSaga() {
  yield takeEvery(DELETE_CAT_FAVOURITE, catFavouriteDelete);
}
//====================================================================
