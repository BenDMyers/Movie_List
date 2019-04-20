import axios from 'axios';
import {CLEAR_SEARCH, UPDATE_SEARCH_QUERY, UPDATE_SEARCH_RESULTS} from './types';
import {tmdbKey} from '../config/keys';

export const clearSearch = () => {
    return {type: CLEAR_SEARCH};
};

export const updateSearchResults = (query) => {
    const payload = axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${tmdbKey}&page=1`);
    return {type: UPDATE_SEARCH_RESULTS, payload};
}

export const updateSearchQuery = (query, dispatch) => {
    dispatch({type: UPDATE_SEARCH_QUERY, payload: query});
    dispatch(updateSearchResults(query)); // async
};