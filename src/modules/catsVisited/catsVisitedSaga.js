import { serverSendCatFavourite, serverDeleteCatFavourite } from "../../api";
import { call, put, select, takeEvery } from "redux-saga/effects";

import {
  SET_CAT_VISITED,
  catVisitedSuccess,
  catVisitedFailure,
} from "./actions";
import {
  DELETE_CAT_VISITED,
  deleteCatVisitedSuccess,
  deleteCatVisitedFailure,
} from "./actions";
import { updateCatFavourite } from "../catsFavourites";
import { showNotification } from "../tooltips"; // success or warning or error

const getFavouriteId = (state) => state.catsVisitedReducer.catFavourite;

//======================================================= ТЕСТИРОВАНИЕ
export function* catVisitedAdd(action) {
  // console.log("catFavouriteSaga : catFavouriteAdd", action.payload);

  try {
    const { catId, favouriteId, image_id } = action.payload;

    if (favouriteId) {
      const {
        success: { id: newFavouriteId },
        error,
      } = yield call(serverSendCatFavourite, image_id);

      if (error) throw new Error();

      // ID постоянно меняется после удаления
      // Обновляем ID обьекта в главном редьюсере catsFavouritesReducer -> catsFavourites
      yield put(
        updateCatFavourite({ favouriteId: newFavouriteId, image_id: image_id })
      );

      yield put(
        catVisitedSuccess({
          catId: image_id,
          favouriteId: newFavouriteId,
          activeFavourite: true,
        })
      );
      yield put(
        showNotification({
          type: "success",
          text: "The pet has been added to favourites.", //Pet was removed from favourites
        })
      );
    } else {
      let {
        success: { id },
      } = yield call(serverSendCatFavourite, catId);

      if (id) {
        yield put(
          catVisitedSuccess({
            catId: catId,
            favouriteId: id,
            activeFavourite: true,
          })
        ); // id image for id favourite
        yield put(
          showNotification({
            type: "success",
            text: "The pet has been added to favourites.", //Pet was removed from favourites
          })
        );
      } else {
        yield put(catVisitedFailure(new Error("error").message));
        yield put(
          showNotification({
            type: "warning",
            text: "Strange data from the server.",
          })
        );
      }
    }
  } catch (error) {
    console.log(error);
    yield put(catVisitedFailure(error));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catsVisitedSaga() {
  yield takeEvery(SET_CAT_VISITED, catVisitedAdd);
}
//====================================================================

//======================================================= ТЕСТИРОВАНИЕ
export function* catVisitedDelete(action) {
  // console.log("catFavouriteSaga : catFavouriteDelete", action.payload);

  try {
    const { catId, favouriteId, image_id } = action.payload;

    if (favouriteId) {
      let catFavouriteFilter = [];

      const catsVisitedReducer = yield select(getFavouriteId);

      const catFavourite = catsVisitedReducer.filter(
        (element) => element.catId === image_id
      );

      if (catFavourite.length > 0) {
        // Если я свой id нашел в массиве
        catFavouriteFilter = catsVisitedReducer.map((e) => {
          if (e.catId === (catId || image_id)) {
            return {
              catId: e.catId,
              favouriteId: favouriteId,
              activeFavourite: false,
            };
          } else {
            return {
              catId: e.catId,
              favouriteId: e.favouriteId,
              activeFavourite: e.activeFavourite,
            };
          }
        });
      } else {
        // Если я свой id НЕ нашел в массиве
        catFavouriteFilter = [
          ...catsVisitedReducer,
          { catId: image_id, favouriteId, activeFavourite: false },
        ];
      }

      let { success, error } = yield call(
        serverDeleteCatFavourite,
        favouriteId
      );

      if (error) throw new Error().message;

      yield put(deleteCatVisitedSuccess({ data: catFavouriteFilter }));
      yield put(
        showNotification({
          type: "success",
          text: "Pet was removed from favourites.", // The pet has been added to favourites
        })
      );
    } else {
      const catsVisitedReducer = yield select(getFavouriteId);

      const catFavourite = catsVisitedReducer.filter(
        (element) => element.catId === catId
      );

      const {
        catId: catId_,
        favouriteId: favouriteId_,
        activeFavourite: activeFavourite_,
      } = catFavourite[0];

      if (favouriteId_.length === 0) throw new Error();

      const { error, success } = yield call(
        serverDeleteCatFavourite,
        favouriteId_
      );

      if (error) throw new Error();

      const catFavouriteFilter = catsVisitedReducer.map((e) => {
        if (e.catId === catId) {
          return {
            catId: e.catId,
            favouriteId: e.favouriteId,
            activeFavourite: false,
          };
        } else {
          return {
            catId: e.catId,
            favouriteId: e.favouriteId,
            activeFavourite: e.activeFavourite,
          };
        }
      });

      yield put(deleteCatVisitedSuccess({ data: catFavouriteFilter }));
      yield put(
        showNotification({
          type: "success",
          text: "Pet was removed from favourites.", // The pet has been added to favourites
        })
      );
    }
  } catch (error) {
    console.log(error);
    yield put(deleteCatVisitedFailure(error.message));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* deleteCatsVisitedSaga() {
  yield takeEvery(DELETE_CAT_VISITED, catVisitedDelete);
}
//====================================================================
