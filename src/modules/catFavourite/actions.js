// SET
export const SET_CAT_FAVOURITE = "SET_CAT_FAVOURITE";
export const CAT_FAVOURITE_SUCCESS = "CAT_FAVOURITE_SUCCESS";
export const CAT_FAVOURITE_FAILURE = "CAT_FAVOURITE_FAILURE";

// SET
export const setCatFavourite = ({ catId, favouriteId, image_id }) => ({
  type: SET_CAT_FAVOURITE,
  payload: { catId, favouriteId, image_id },
});
export const catFavouriteSuccess = ({ catId, favouriteId, activeFavourite }) => ({
  type: CAT_FAVOURITE_SUCCESS,
  payload: { catId, favouriteId, activeFavourite },
});
export const catFavouriteFailure = (error) => ({
  type: CAT_FAVOURITE_FAILURE,
  payload: { error },
});

// DELETE
export const DELETE_CAT_FAVOURITE = "DELETE_CAT_FAVOURITE";
export const DELETE_CAT_FAVOURITE_SUCCESS = "DELETE_CAT_FAVOURITE_SUCCESS";
export const DELETE_CAT_FAVOURITE_FAILURE = "DELETE_CAT_FAVOURITE_FAILURE";

export const deleteCatFavourite = ({ catId, favouriteId, image_id }) => ({
  type: DELETE_CAT_FAVOURITE,
  payload: { catId, favouriteId, image_id },
});
export const deleteCatFavouriteSuccess = ({ data }) => ({
  type: DELETE_CAT_FAVOURITE_SUCCESS,
  payload: { data },
});
export const deleteCatFavouriteFailure = (error) => ({
  type: DELETE_CAT_FAVOURITE_FAILURE,
  payload: { error },
});
