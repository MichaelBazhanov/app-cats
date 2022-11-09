import {
  GET_CATS_FAVOURITES,
  CATS_FAVOURITES_SUCCESS,
  CATS_FAVOURITES_FAILURE,
  ADD_CATS_FAVOURITES,
  ADD_CATS_FAVOURITES_SUCCESS,
  ADD_CATS_FAVOURITES_FAILURE,
  REMOVE_CATS_FAVOURITES,
  REMOVE_CATS_FAVOURITES_SUCCESS,
  REMOVE_CATS_FAVOURITES_FAILURE,
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
    case ADD_CATS_FAVOURITES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ADD_CATS_FAVOURITES_SUCCESS: {
      const data = state.catsFavourites.map((e) => {
        if(e.image_id === action.payload.image_id) {
          return {...e, id: action.payload.id, isFavourite: action.payload.isFavourite }
        } else {
          return {...e}
        }
      })
      return {
        ...state,
        catsFavourites: data,
        isLoading: false,
      };
    }
    case ADD_CATS_FAVOURITES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case REMOVE_CATS_FAVOURITES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REMOVE_CATS_FAVOURITES_SUCCESS: {
      const data = state.catsFavourites.map((e) => {
        if(e.id === action.payload.id) {
          return {...e, id: 0, isFavourite: action.payload.isFavourite }
        } else {
          return {...e}
        }
      })
      return {
        ...state,
        catsFavourites: data,
        isLoading: false,
      };
    }
    case REMOVE_CATS_FAVOURITES_FAILURE: {
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
