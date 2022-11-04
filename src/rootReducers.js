import { combineReducers } from "redux";

import { default as catsReducer } from "./modules/cats";
import { default as catsFavouritesReducer } from "./modules/catsFavourites/reducer"; //me_error
import { default as catFavouriteReducer } from "./modules/catFavourite";
import { default as tooltipsReducer } from './modules/tooltips'

export default combineReducers({
  catsReducer,
  catsFavouritesReducer,
  catFavouriteReducer,
  tooltipsReducer,
});
