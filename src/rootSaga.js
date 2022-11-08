import { all, fork } from "redux-saga/effects";

import { catsSaga, addCatsSaga, removeCatsSaga } from "./modules/cats";
import {
  catsFavouritesSaga,
  addCatsFavouritesSaga,
  removeCatsFavouritesSaga,
} from "./modules/catsFavourites";
import { tooltipsSaga } from "./modules/tooltips";

export function* rootSaga() {
  yield all([
    fork(catsSaga),
    fork(addCatsSaga),
    fork(removeCatsSaga),
    fork(catsFavouritesSaga),
    fork(addCatsFavouritesSaga),
    fork(removeCatsFavouritesSaga),
    fork(tooltipsSaga),
  ]);
}
