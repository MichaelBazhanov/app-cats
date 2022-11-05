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
import { showNotification } from "../tooltips"; // success or warning or error

const getFavouriteId = (state) => state.catFavouriteReducer.catFavourite;

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteAdd(action) {
  // console.log("catFavouriteSaga : catFavouriteAdd", action.payload);

  try {
    const { catId, favouriteId, image_id } = action.payload;

    if (favouriteId) {
      const {
        success: { id: newFavouriteId },
        error,
      } = yield call(serverSendCatFavourite, image_id);

      if (error) throw new Error();

      console.log('Фавориты, то место где нужно обновить ID')
      // ID постоянно меняется после удаления
      // Обновляем ID обьекта в главном редьюсере catsFavouritesReducer -> catsFavourites


      yield put(
        catFavouriteSuccess({ catId: image_id, favouriteId: newFavouriteId, activeFavourite: true })
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
        yield put(catFavouriteSuccess({ catId: catId, favouriteId: id, activeFavourite: true })); // id image for id favourite
        yield put(
          showNotification({
            type: "success",
            text: "The pet has been added to favourites.", //Pet was removed from favourites
          })
        );
      } else {
        yield put(catFavouriteFailure(new Error("error").message));
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
    yield put(catFavouriteFailure(error));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteSaga() {
  yield takeEvery(SET_CAT_FAVOURITE, catFavouriteAdd);
}
//====================================================================

//======================================================= ТЕСТИРОВАНИЕ
export function* catFavouriteDelete(action) {
  // console.log("catFavouriteSaga : catFavouriteDelete", action.payload);

  try {
    const { catId, favouriteId, image_id } = action.payload;

    if (favouriteId) { console.log('мы на фаворитах /////////////////////////////////////////////')
      console.log({ catId, favouriteId, image_id } )

      let catFavouriteFilter = [];

      const catFavouriteReducer = yield select(getFavouriteId);
      console.log('ДО ПЕРЕБОРА суть', catFavouriteReducer)

      const catFavourite = catFavouriteReducer.filter(
        (element) => element.catId === image_id
      );
       // console.log('ДО ПЕРЕБОРА ', catFavourite)
      if (catFavourite.length > 0) { // Если я свой id нашел в массиве
        // console.log('массив не пустой 123')
        catFavouriteFilter = catFavouriteReducer.map((e) => {
          if(e.catId === catId) { console.log('Внутри перебора: e.favouriteId', e.favouriteId)
            return {catId: e.catId, favouriteId: favouriteId, activeFavourite: false}
          } else {
            return {catId: e.catId, favouriteId: e.favouriteId, activeFavourite: e.activeFavourite}
          }
        })
      } else { // Если я свой id НЕ нашел в массиве
        console.log('пустой массив 123')
        catFavouriteFilter = [...catFavouriteReducer, { catId: image_id, favouriteId, activeFavourite: false }];
      }

      // console.log(catFavouriteFilter)

      let { success, error } = yield call(
        serverDeleteCatFavourite,
        favouriteId
      );

      if (error) throw new Error().message;

      yield put(deleteCatFavouriteSuccess({data: catFavouriteFilter}));
      yield put(
        showNotification({
          type: "success",
          text: "Pet was removed from favourites.", // The pet has been added to favourites
        })
      );

      // ================================================
      // const catFavouriteReducer = yield select(getFavouriteId);

      // const catFavourite = catFavouriteReducer.filter(
      //   (element) => element.catId === image_id
      // );

      // console.log(catFavourite)

      // // zero state (сюда попадать не должен)
      // if (catFavourite.length === 0) { console.log('first state')
      //   let { success, error } = yield call(
      //     serverDeleteCatFavourite,
      //     favouriteId
      //   );

      //   if (error) throw new Error().message;

      //   yield put(deleteCatFavouriteSuccess({ catId: "" }));
      //   yield put(
      //     showNotification({
      //       type: "success",
      //       text: "Pet was removed from favourites.", // The pet has been added to favourites
      //     })
      //   );
      // }

      // // new state
      // if (catFavourite.length === 1) { console.log('new state')
      //   const newFavouriteId =
      //     favouriteId !== catFavourite[0].favouriteId
      //       ? catFavourite[0].favouriteId
      //       : favouriteId;

      //   let { success, error } = yield call(
      //     serverDeleteCatFavourite,
      //     newFavouriteId
      //   );

      //   if (error) throw new Error().message;

      //   yield put(deleteCatFavouriteSuccess({ catId: image_id, activeFavourite: false }));
      //   yield put(
      //     showNotification({
      //       type: "success",
      //       text: "Pet was removed from favourites.", // The pet has been added to favourites
      //     })
      //   );
      // }
    } else { console.log('не фаворит /////////////////////////////////////////////')
      const catFavouriteReducer = yield select(getFavouriteId);

      const catFavourite= catFavouriteReducer.filter(
        (element) => element.catId === catId
      );

      const {catId: catId_, favouriteId: favouriteId_, activeFavourite: activeFavourite_} = catFavourite[0];

      if (favouriteId_.length === 0) throw new Error();

      const { error, success } = yield call(
        serverDeleteCatFavourite,
        favouriteId_
      );

      if (error) throw new Error();

      const catFavouriteFilter = catFavouriteReducer.map((e)=>{
        if(e.catId === catId) {
          return {catId: e.catId, favouriteId: e.favouriteId, activeFavourite: false}
        } else {
          return {catId: e.catId, favouriteId: e.favouriteId, activeFavourite: e.activeFavourite}
        }
      })

      // yield put(deleteCatFavouriteSuccess({ catId: catId_, favouriteId: favouriteId_, activeFavourite: false }));
      yield put(deleteCatFavouriteSuccess({data: catFavouriteFilter}));
      yield put(
        showNotification({
          type: "success",
          text: "Pet was removed from favourites.", // The pet has been added to favourites
        })
      );
    }
  } catch (error) {
    console.log(error);
    yield put(deleteCatFavouriteFailure(error.message));
    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* deleteCatFavouriteSaga() {
  yield takeEvery(DELETE_CAT_FAVOURITE, catFavouriteDelete);
}
//====================================================================
