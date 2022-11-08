export const GET_CATS = "app/cats/GET_CATS";
export const CATS_SUCCESS = "app/cats/CATS_SUCCESS";
export const CATS_FAILURE = "app/cats/CATS_FAILURE";

// GET
export const getCats = (quantity) => ({
  type: GET_CATS,
  payload: { quantity },
});
export const catsSuccess = (cats) => ({
  type: CATS_SUCCESS,
  payload: { cats },
});
export const catsFailure = (error) => ({
  type: CATS_FAILURE,
  payload: { error },
});

// ADD
export const ADD_CAT_FAVOURITES = "app/cats/ADD_CAT_FAVOURITES";
export const ADD_CAT_FAVOURITES_SUCCESS = "app/cats/ADD_CAT_FAVOURITES_SUCCESS";
export const ADD_CAT_FAVOURITES_FAILURE = "app/cats/ADD_CAT_FAVOURITES_FAILURE";

export const addCatFavourites = ({ image_id }) => ({
  type: ADD_CAT_FAVOURITES,
  payload: { image_id },
});
export const addCatFavouritesSuccess = ({ id, image_id, isFavourite }) => ({
  type: ADD_CAT_FAVOURITES_SUCCESS,
  payload: { id, image_id, isFavourite },
});
export const addCatFavouritesFailure = (error) => ({
  type: ADD_CAT_FAVOURITES_FAILURE,
  payload: { error },
});

// REMOVE
export const REMOVE_CAT_FAVOURITES = "app/cats/REMOVE_CAT_FAVOURITES";
export const REMOVE_CAT_FAVOURITES_SUCCESS = "app/cats/REMOVE_CAT_FAVOURITES_SUCCESS";
export const REMOVE_CAT_FAVOURITES_FAILURE = "app/cats/REMOVE_CAT_FAVOURITES_FAILURE";

export const removeCatFavourites = ({ id }) => ({
  type: REMOVE_CAT_FAVOURITES,
  payload: { id },
});
export const removeCatFavouritesSuccess = ({ id, isFavourite }) => ({
  type: REMOVE_CAT_FAVOURITES_SUCCESS,
  payload: { id, isFavourite },
});
export const removeCatFavouritesFailure = (error) => ({
  type: REMOVE_CAT_FAVOURITES_FAILURE,
  payload: { error },
});