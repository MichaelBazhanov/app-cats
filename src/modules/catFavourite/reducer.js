import {
  SET_CAT_FAVOURITE,
  CAT_FAVOURITE_SUCCESS,
  CAT_FAVOURITE_FAILURE,
  DELETE_CAT_FAVOURITE,
  DELETE_CAT_FAVOURITE_SUCCESS,
  DELETE_CAT_FAVOURITE_FAILURE,
} from "./actions";

const initialState = {
  catFavourite: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CAT_FAVOURITE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CAT_FAVOURITE_SUCCESS: {
      return {
        ...state,
        catFavourite: [
          ...state.catFavourite,
          {
            catId: action.payload.catId,
            favouriteId: action.payload.favouriteId,
          },
        ],
        isLoading: false,
      };
    }
    case CAT_FAVOURITE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case DELETE_CAT_FAVOURITE: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_CAT_FAVOURITE_SUCCESS: {
      const favouriteArray = state.catFavourite.filter(
        (el) => el.catId !== action.payload.catId
      );
      return {
        ...state,
        catFavourite: [...favouriteArray],
        isLoading: false,
      };
    }
    case DELETE_CAT_FAVOURITE_FAILURE: {
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
