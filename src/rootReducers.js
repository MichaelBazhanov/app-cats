import { combineReducers } from "redux";

import { default as catsReducer } from "./modules/cats";

export default combineReducers({
  catsReducer,
});
