export const SET_CAT_FAVORITE = "SET_CAT_FAVORITE";
export const CAT_FAVORITE_SUCCESS = "CAT_FAVORITE_SUCCESS";
export const CAT_FAVORITE_FAILURE = "CAT_FAVORITE_FAILURE";

export const setCatFavorite = (catImageId) => ({
  type: SET_CAT_FAVORITE,
  payload: { catImageId },
});
export const catFavoriteSuccess = (id) => ({
  type: CAT_FAVORITE_SUCCESS,
  payload: { id },
});
export const catFavoriteFailure = (error) => ({
  type: CAT_FAVORITE_FAILURE,
  payload: { error },
});
