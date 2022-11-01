export const GET_CATS = "GET_CATS";
export const CATS_SUCCESS = "CATS_SUCCESS";
export const CATS_FAILURE = "CATS_FAILURE";

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
