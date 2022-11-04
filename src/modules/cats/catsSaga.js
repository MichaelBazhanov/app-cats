import { serverGetCats } from "../../api";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_CATS, catsSuccess, catsFailure } from "./actions";
//======================================================= ТЕСТИРОВАНИЕ
export function* cats(action) {
  try {
    const { quantity } = action.payload;

    let { success } = yield call(serverGetCats, quantity);

    if (success) {
      success = success.map(({ id, url }) => {
        return { id, url };
      });

      yield put(catsSuccess(success));
    } else {
      yield put(catsFailure(new Error("error").message));
    }
  } catch (error) {
    console.log(error)
    yield put(catsFailure(error.response));
  }
}
//======================================================= ТЕСТИРОВАНИЕ
export function* catsSaga() {
  yield takeEvery(GET_CATS, cats);
}
//====================================================================
