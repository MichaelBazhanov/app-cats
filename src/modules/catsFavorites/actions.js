export const GET_CATS_FAVORITES = "GET_CATS_FAVORITES";
export const CATS_FAVORITES_SUCCESS = "CATS_FAVORITES_SUCCESS";
export const CATS_FAVORITES_FAILURE = "CATS_FAVORITES_FAILURE";

export const getCatsFavorites = (quantity) => ({
  type: GET_CATS_FAVORITES,
  payload: { quantity },
});
export const catsFavoritesSuccess = (cats) => ({
  type: CATS_FAVORITES_SUCCESS,
  payload: { cats },
});
export const catsFavoritesFailure = (error) => ({
  type: CATS_FAVORITES_FAILURE,
  payload: { error },
});

// ===============================================================
