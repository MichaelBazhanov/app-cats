import {
  GET_CATS_FAVORITES,
  CATS_FAVORITES_SUCCESS,
  CATS_FAVORITES_FAILURE,
} from "./actions";

const initialState = {
  catsFavorites: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATS_FAVORITES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CATS_FAVORITES_SUCCESS: {
      return {
        ...state,
        catsFavorites: action.payload.catsFavorites,
        isLoading: false,
      };
    }
    case CATS_FAVORITES_FAILURE: {
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
