import { GET_PLANETS, SEARCH_PLANETS, PLANETS_ERROR } from './types';

// Get Planets from server
export const getPlanets = () => async dispatch => {
  try {
    const res = await fetch('https://swapi.co/api/planets/');
    const data = await res.json();

    dispatch({
      type: GET_PLANETS,
      payload: data.results
    });
  } catch (err) {}
};

// Search Planets from server
export const searchPlanets = text => async dispatch => {
  try {
    const res = await fetch(`https://swapi.co/api/planets/?search=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_PLANETS,
      payload: data.results
    });
  } catch (err) {}
};
