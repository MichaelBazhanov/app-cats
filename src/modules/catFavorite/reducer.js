import {
  SET_CAT_FAVORITE,
  CAT_FAVORITE_SUCCESS,
  CAT_FAVORITE_FAILURE,
} from "./actions";

const initialState = {
  catFavorite: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CAT_FAVORITE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CAT_FAVORITE_SUCCESS: {
      return {
        ...state,
        catFavorite: [...state.catFavorite, action.payload.id],
        isLoading: false,
      };
    }
    case CAT_FAVORITE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
}
