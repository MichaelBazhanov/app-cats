import { all, fork } from "redux-saga/effects";

import { catsSaga } from "./modules/cats";
import { catsFavoritesSaga } from "./modules/catsFavorites";
import { catFavoriteSaga } from "./modules/catFavorite";

export function* rootSaga() {
  yield all([fork(catsSaga), fork(catsFavoritesSaga), fork(catFavoriteSaga)]);
}
