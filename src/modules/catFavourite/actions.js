// SET
export const SET_CAT_FAVOURITE = "SET_CAT_FAVOURITE";
export const CAT_FAVOURITE_SUCCESS = "CAT_FAVOURITE_SUCCESS";
export const CAT_FAVOURITE_FAILURE = "CAT_FAVOURITE_FAILURE";

export const setCatFavourite = (catImageId) => ({
  type: SET_CAT_FAVOURITE,
  payload: { catImageId },
});
export const catFavouriteSuccess = (id) => ({
  type: CAT_FAVOURITE_SUCCESS,
  payload: { id },
});
export const catFavouriteFailure = (error) => ({
  type: CAT_FAVOURITE_FAILURE,
  payload: { error },
});

// DELETE

export const DELETE_CAT_FAVOURITE = "DELETE_CAT_FAVOURITE";
export const DELETE_CAT_FAVOURITE_SUCCESS = "DELETE_CAT_FAVOURITE_SUCCESS";
export const DELETE_CAT_FAVOURITE_FAILURE = "DELETE_CAT_FAVOURITE_FAILURE";

export const deleteCatFavourite = (favouriteId) => ({
  type: DELETE_CAT_FAVOURITE,
  payload: { favouriteId },
});
export const deleteCatFavouriteSuccess = (id) => ({
  type: DELETE_CAT_FAVOURITE_SUCCESS,
  payload: { id },
});
export const deleteCatFavouriteFailure = (error) => ({
  type: DELETE_CAT_FAVOURITE_FAILURE,
  payload: { error },
});
