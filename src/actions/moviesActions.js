import axios from 'axios';

import {GET_MOVIES} from './types';

export const getMovies = () => {
    const payload = axios.get('https://bdm-watchlist-api.herokuapp.com/movies/');
    return {type: GET_MOVIES, payload};
};