import { all, fork } from "redux-saga/effects";

import { catsSaga } from "./modules/cats";

export function* rootSaga() {
  yield all([
    fork(catsSaga),
  ]);
}
