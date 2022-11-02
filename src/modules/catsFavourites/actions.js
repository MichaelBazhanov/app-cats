export const GET_CATS_FAVOURITES = "GET_CATS_FAVOURITES";
export const CATS_FAVOURITES_SUCCESS = "CATS_FAVOURITES_SUCCESS";
export const CATS_FAVOURITES_FAILURE = "CATS_FAVOURITES_FAILURE";

export const getCatsFavourites = (quantity) => ({
  type: GET_CATS_FAVOURITES,
  payload: { quantity },
});
export const catsFavouritesSuccess = (catsFavourites) => ({
  type: CATS_FAVOURITES_SUCCESS,
  payload: { catsFavourites },
});
export const catsFavouritesFailure = (error) => ({
  type: CATS_FAVOURITES_FAILURE,
  payload: { error },
});
// ===============================================================
