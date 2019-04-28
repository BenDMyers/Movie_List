import axios from 'axios';

import {GET_MOVIES} from './types';

export const TRIGGER_SORT = 'triggerSort';
export const MAINTAIN_ORDER = 'maintainOrder';

const BASE_URL = 'https://bdm-watchlist-api.herokuapp.com';
// const BASE_URL = 'http://localhost:4000';

export const getMovies = (sortStrategy) => (dispatch, getState) => {
    const userId = getState().user;
    const payload = axios.get(`${BASE_URL}/movies/`, {auth: {username: userId}});
    let meta = {};
    sortStrategy && (meta[sortStrategy] = true);
    dispatch({type: GET_MOVIES, payload, meta});
};