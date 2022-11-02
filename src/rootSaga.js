import { all, fork } from "redux-saga/effects";

import { catsSaga } from "./modules/cats";
import { catsFavouritesSaga } from "./modules/catsFavourites/catsFavouritesSaga"; //me_error
import { catFavouriteSaga } from "./modules/catFavourite";

export function* rootSaga() {
  yield all([fork(catsSaga), fork(catsFavouritesSaga), fork(catFavouriteSaga)]);
}
