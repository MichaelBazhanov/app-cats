// SET
export const SET_CAT_VISITED = "SET_CAT_VISITED";
export const CAT_VISITED_SUCCESS = "CAT_VISITED_SUCCESS";
export const CAT_VISITED_FAILURE = "CAT_VISITED_FAILURE";

// SET
export const setCatVisited = ({ catId, favouriteId, image_id }) => ({
  type: SET_CAT_VISITED,
  payload: { catId, favouriteId, image_id },
});
export const catVisitedSuccess = ({ catId, favouriteId, activeFavourite }) => ({
  type: CAT_VISITED_SUCCESS,
  payload: { catId, favouriteId, activeFavourite },
});
export const catVisitedFailure = (error) => ({
  type: CAT_VISITED_FAILURE,
  payload: { error },
});

// DELETE
export const DELETE_CAT_VISITED = "DELETE_CAT_VISITED";
export const DELETE_CAT_VISITED_SUCCESS = "DELETE_CAT_VISITED_SUCCESS";
export const DELETE_CAT_VISITED_FAILURE = "DELETE_CAT_VISITED_FAILURE";

export const deleteCatVisited = ({ catId, favouriteId, image_id }) => ({
  type: DELETE_CAT_VISITED,
  payload: { catId, favouriteId, image_id },
});
export const deleteCatVisitedSuccess = ({ data }) => ({
  type: DELETE_CAT_VISITED_SUCCESS,
  payload: { data },
});
export const deleteCatVisitedFailure = (error) => ({
  type: DELETE_CAT_VISITED_FAILURE,
  payload: { error },
});
