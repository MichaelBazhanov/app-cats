import { combineReducers } from "redux";

import { default as catsReducer } from "./modules/cats";
import { default as catsFavouritesReducer } from "./modules/catsFavourites/reducer"; //me_error
import { default as catFavouriteReducer } from "./modules/catFavourite";

export default combineReducers({
  catsReducer,
  catsFavouritesReducer,
  catFavouriteReducer,
});
