import {
  GET_CATS_FAVOURITES,
  CATS_FAVOURITES_SUCCESS,
  CATS_FAVOURITES_FAILURE,
} from "./actions";

const initialState = {
  catsFavourites: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATS_FAVOURITES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CATS_FAVOURITES_SUCCESS: {
      return {
        ...state,
        catsFavourites: action.payload.catsFavourites,
        isLoading: false,
      };
    }
    case CATS_FAVOURITES_FAILURE: {
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
