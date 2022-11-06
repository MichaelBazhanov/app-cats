import { all, fork } from "redux-saga/effects";

import { catsSaga } from "./modules/cats";
import { catsFavouritesSaga } from "./modules/catsFavourites";
import { tooltipsSaga } from "./modules/tooltips";
import {
  catsVisitedSaga,
  deleteCatsVisitedSaga,
} from "./modules/catsVisited";

export function* rootSaga() {
  yield all([
    fork(catsSaga),
    fork(catsFavouritesSaga),
    fork(tooltipsSaga),
    fork(catsVisitedSaga),
    fork(deleteCatsVisitedSaga),
  ]);
}
