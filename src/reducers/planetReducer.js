import { GET_PLANETS, SEARCH_PLANETS, PLANETS_ERROR } from '../actions/types';

const initialState = {
  planets: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload
      };

    case SEARCH_PLANETS:
      return {
        ...state,
        planets: action.payload
      };

    case PLANETS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
