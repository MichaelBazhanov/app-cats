import { combineReducers } from "redux";

import { default as catsReducer } from "./modules/cats";
import { default as catsFavoritesReducer } from "./modules/catsFavorites";
import { default as catFavoriteReducer } from "./modules/catFavorite";

export default combineReducers({
  catsReducer,
  catsFavoritesReducer,
  catFavoriteReducer,
});
