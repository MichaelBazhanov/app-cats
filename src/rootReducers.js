import { combineReducers } from "redux";

import { default as catsReducer } from "./modules/cats";
import { default as catsFavouritesReducer } from "./modules/catsFavourites";
import { default as tooltipsReducer } from './modules/tooltips'

export default combineReducers({
  catsReducer,
  catsFavouritesReducer,
  tooltipsReducer,
});
