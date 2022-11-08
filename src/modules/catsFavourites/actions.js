export const GET_CATS_FAVOURITES = "app/catsFavourites/GET_CATS_FAVOURITES";
export const CATS_FAVOURITES_SUCCESS = "app/catsFavourites/CATS_FAVOURITES_SUCCESS";
export const CATS_FAVOURITES_FAILURE = "app/catsFavourites/CATS_FAVOURITES_FAILURE";

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

// ADD
export const ADD_CATS_FAVOURITES = "app/catsFavourites/ADD_CATS_FAVOURITES";
export const ADD_CATS_FAVOURITES_SUCCESS = "app/catsFavourites/ADD_CATS_FAVOURITES_SUCCESS";
export const ADD_CATS_FAVOURITES_FAILURE = "app/catsFavourites/ADD_CATS_FAVOURITES_FAILURE";

export const addCatsFavourites = ({ image_id }) => ({
  type: ADD_CATS_FAVOURITES,
  payload: { image_id },
});
export const addCatsFavouritesSuccess = ({ id, image_id, isFavourite }) => ({
  type: ADD_CATS_FAVOURITES_SUCCESS,
  payload: { id, image_id, isFavourite },
});
export const addCatsFavouritesFailure = (error) => ({
  type: ADD_CATS_FAVOURITES_FAILURE,
  payload: { error },
});

// REMOVE
export const REMOVE_CATS_FAVOURITES = "app/catsFavourites/REMOVE_CATS_FAVOURITES";
export const REMOVE_CATS_FAVOURITES_SUCCESS = "app/catsFavourites/REMOVE_CATS_FAVOURITES_SUCCESS";
export const REMOVE_CATS_FAVOURITES_FAILURE = "app/catsFavourites/REMOVE_CATS_FAVOURITES_FAILURE";

export const removeCatsFavourites = ({ id }) => ({
  type: REMOVE_CATS_FAVOURITES,
  payload: { id },
});
export const removeCatsFavouritesSuccess = ({ id, isFavourite }) => ({
  type: REMOVE_CATS_FAVOURITES_SUCCESS,
  payload: { id, isFavourite },
});
export const removeCatsFavouritesFailure = (error) => ({
  type: REMOVE_CATS_FAVOURITES_FAILURE,
  payload: { error },
});
