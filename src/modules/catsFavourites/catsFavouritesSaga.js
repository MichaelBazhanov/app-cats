import {
  serverGetCatsFavourites,
  serverDeleteCatFavourite,
  serverSendCatFavourite,
} from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_CATS_FAVOURITES,
  catsFavouritesSuccess,
  catsFavouritesFailure,
  ADD_CATS_FAVOURITES,
  addCatsFavouritesSuccess,
  addCatsFavouritesFailure,
  REMOVE_CATS_FAVOURITES,
  removeCatsFavouritesSuccess,
  removeCatsFavouritesFailure,
} from "./actions";
import { removeCatFavouritesSuccess } from "../cats";
import { showNotification } from "../tooltips"; // success or warning or error

//======================================================= ТЕСТИРОВАНИЕ
export function* catsFavourites(action) {
  try {
    const { quantity } = action.payload;

    let { success, error } = yield call(serverGetCatsFavourites, quantity);

    if (error) throw new Error(error);

    success = success.map(({ id, image: { url }, image_id }) => {
      return {
        id,
        image_id,
        url,
        isFavourite: true,
        favoured: true,
      };
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

//======================================================= ТЕСТИРОВАНИЕ
export function* addCats(action) {
  // console.log("ADD_CATS_FAVOURITES - addCats :", action.payload);
  try {
    const { image_id } = action.payload;

    const {
      success: { id },
      error,
    } = yield call(serverSendCatFavourite, image_id);

    if (error) throw new Error(error);

    yield put(
      addCatsFavouritesSuccess({
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
    yield put(addCatsFavouritesFailure(error.message));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* addCatsFavouritesSaga() {
  yield takeEvery(ADD_CATS_FAVOURITES, addCats);
}
//====================================================================

//======================================================= ТЕСТИРОВАНИЕ
export function* removeCats(action) {
  // console.log("REMOVE_CATS_FAVOURITES - removeCats :", action.payload);
  try {
    const { id } = action.payload;

    let { error } = yield call(serverDeleteCatFavourite, id);

    if (error) throw new Error(error);

    yield put(removeCatsFavouritesSuccess({ id, isFavourite: false }));
    yield put(removeCatFavouritesSuccess({ id, isFavourite: false }));

    yield put(
      showNotification({
        type: "success",
        text: "Pet was removed from favourites.", // The pet has been added to favourites
      })
    );
  } catch (error) {
    console.log(error);
    yield put(removeCatsFavouritesFailure(error.message));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* removeCatsFavouritesSaga() {
  yield takeEvery(REMOVE_CATS_FAVOURITES, removeCats);
}
//====================================================================
