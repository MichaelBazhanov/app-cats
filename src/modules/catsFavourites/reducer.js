import {
  GET_CATS_FAVOURITES,
  CATS_FAVOURITES_SUCCESS,
  CATS_FAVOURITES_FAILURE,
  UPDATE_CATS_FAVOURITES,
  UPDATE_CATS_FAVOURITES_SUCCESS,
  UPDATE_CATS_FAVOURITES_FAILURE,
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

    case UPDATE_CATS_FAVOURITES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UPDATE_CATS_FAVOURITES_SUCCESS: {
      const { favouriteId, image_id } = action.payload;

      let data = [];

      let repeatData = state.catsFavourites.filter((e) => {
        return e.image_id === image_id
      })

      if (repeatData.length > 0) {
        data = state.catsFavourites.map((e) => {
          if(e.image_id === image_id) {
            return {...e, id: favouriteId}
          } else {
            return {...e}
          }
        })
      } else {
        data = [...state.catsFavourites]
      }

      return {
        ...state,
        catsFavourites: data,
        isLoading: false,
      };
    }
    case UPDATE_CATS_FAVOURITES_FAILURE: {
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
