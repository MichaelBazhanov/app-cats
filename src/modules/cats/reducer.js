import {
  GET_CATS,
  CATS_SUCCESS,
  CATS_FAILURE,
  ADD_CAT_FAVOURITES,
  ADD_CAT_FAVOURITES_SUCCESS,
  ADD_CAT_FAVOURITES_FAILURE,
  REMOVE_CAT_FAVOURITES,
  REMOVE_CAT_FAVOURITES_SUCCESS,
  REMOVE_CAT_FAVOURITES_FAILURE,
} from "./actions";

const initialState = {
  cats: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CATS_SUCCESS: {
      return {
        ...state,
        cats: [...state.cats, ...action.payload.cats],
        isLoading: false,
      };
    }
    case CATS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case ADD_CAT_FAVOURITES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_CAT_FAVOURITES_SUCCESS: {
      const data = state.cats.map((e) => {
        if(e.image_id === action.payload.image_id) {
          return {...e, id: action.payload.id, isFavourite: action.payload.isFavourite }
        } else {
          return {...e}
        }
      })
      return {
        ...state,
        cats: data,
        isLoading: false,
      };
    }
    case ADD_CAT_FAVOURITES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }

    case REMOVE_CAT_FAVOURITES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REMOVE_CAT_FAVOURITES_SUCCESS: {
      const data = state.cats.map((e) => {
        if(e.id === action.payload.id) {
          return {...e, id: 0, isFavourite: action.payload.isFavourite }
        } else {
          return {...e}
        }
      })
      return {
        ...state,
        cats: data,
        isLoading: false,
      };
    }
    case REMOVE_CAT_FAVOURITES_FAILURE: {
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
