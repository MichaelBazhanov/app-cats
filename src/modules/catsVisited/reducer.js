import {
  SET_CAT_VISITED,
  CAT_VISITED_SUCCESS,
  CAT_VISITED_FAILURE,
  DELETE_CAT_VISITED,
  DELETE_CAT_VISITED_SUCCESS,
  DELETE_CAT_VISITED_FAILURE,
} from "./actions";

const initialState = {
  catFavourite: [],
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CAT_VISITED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CAT_VISITED_SUCCESS: {

      const {catId, favouriteId, activeFavourite} = action.payload;
      let catFavourite = [...state.catFavourite];
      let data;

      let repeatData = state.catFavourite.filter((e)=>{
        return e.catId === catId
      })

      if (repeatData.length > 0) {
        data = catFavourite.map((e) => {
          if(e.catId === catId) {
            return {catId: e.catId, favouriteId: favouriteId, activeFavourite: activeFavourite}
          } else {
            return {catId: e.catId, favouriteId: e.favouriteId, activeFavourite: e.activeFavourite}
          }
        })
      } else {
        data = [...state.catFavourite, {...action.payload}]
      }

      return {
        ...state,
        catFavourite: data,
        isLoading: false,
      };
    }
    case CAT_VISITED_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case DELETE_CAT_VISITED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case DELETE_CAT_VISITED_SUCCESS: {
      return {
        ...state,
        catFavourite: action.payload.data,
        isLoading: false,
      };
    }
    case DELETE_CAT_VISITED_FAILURE: {
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
