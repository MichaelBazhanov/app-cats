import { serverGetCats } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_CATS, catsSuccess, catsFailure } from "./actions";
import { showNotification } from "../tooltips"; // success or warning or error

//======================================================= ТЕСТИРОВАНИЕ
export function* cats(action) {
  try {
    const { quantity } = action.payload;

    let { success, error } = yield call(serverGetCats, quantity);

    if (error) throw new Error(error);

    success = success.map(({ id, url }) => {
      return { id, url };
    });

    yield put(catsSuccess(success));
  } catch (error) {
    console.log(error);

    yield put(catsFailure(error.message));

    yield put(
      showNotification({
        type: "error",
        text: "I'm sorry, but there's been some kind of mistake.",
      })
    );
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catsSaga() {
  yield takeEvery(GET_CATS, cats);
}
//====================================================================
