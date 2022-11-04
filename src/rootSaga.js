import { all, fork } from "redux-saga/effects";

import { catsSaga } from "./modules/cats";
import { catsFavouritesSaga } from "./modules/catsFavourites";
import {
  catFavouriteSaga,
  deleteCatFavouriteSaga,
} from "./modules/catFavourite";
import { tooltipsSaga } from "./modules/tooltips";

export function* rootSaga() {
  yield all([
    fork(catsSaga),
    fork(catsFavouritesSaga),
    fork(deleteCatFavouriteSaga),
    fork(catFavouriteSaga),
    fork(tooltipsSaga),
  ]);
}
