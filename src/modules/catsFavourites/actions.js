export const GET_CATS_FAVOURITES = "GET_CATS_FAVOURITES";
export const CATS_FAVOURITES_SUCCESS = "CATS_FAVOURITES_SUCCESS";
export const CATS_FAVOURITES_FAILURE = "CATS_FAVOURITES_FAILURE";

// GET
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

// UPDATE
export const UPDATE_CATS_FAVOURITES = "UPDATE_CATS_FAVOURITES";
export const UPDATE_CATS_FAVOURITES_SUCCESS = "UPDATE_CATS_FAVOURITES_SUCCESS";
export const UPDATE_CATS_FAVOURITES_FAILURE = "UPDATE_CATS_FAVOURITES_FAILURE";

export const updateCatFavourite = ({ favouriteId }) => ({
  type: UPDATE_CATS_FAVOURITES,
  payload: { favouriteId },
});
export const updateCatFavouriteSuccess = ({ favouriteId, image_id }) => ({
  type: UPDATE_CATS_FAVOURITES_SUCCESS,
  payload: { favouriteId, image_id },
});
export const updateCatFavouriteFailure = (error) => ({
  type: UPDATE_CATS_FAVOURITES_FAILURE,
  payload: { error },
});