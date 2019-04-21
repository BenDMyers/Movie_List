import axios from 'axios';

import {GET_MOVIES} from './types';

export const getMovies = () => {
    const payload = axios.get('http://bdm-watchlist-api.herokuapp.com/movies/');
    return {type: GET_MOVIES, payload};
};