import { GET_CATS, CATS_SUCCESS, CATS_FAILURE } from "./actions";

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
        cats: action.payload.cats,
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
    default:
      return state;
  }
}
