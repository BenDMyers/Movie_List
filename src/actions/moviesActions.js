import axios from 'axios';

import {GET_MOVIES} from './types';

export const TRIGGER_SORT = 'triggerSort';
export const MAINTAIN_ORDER = 'maintainOrder';

export const getMovies = (sortStrategy) => {
    const payload = axios.get('https://bdm-watchlist-api.herokuapp.com/movies/');
    let meta = {};
    sortStrategy && (meta[sortStrategy] = true);
    return {type: GET_MOVIES, payload, meta};
};