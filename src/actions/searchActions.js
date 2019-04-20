import axios from 'axios';
import {CLEAR_SEARCH, SET_SEARCH_RESULTS_SPINNER, UPDATE_SEARCH_QUERY, UPDATE_SEARCH_RESULTS} from './types';
import {tmdbKey} from '../config/keys';

export const clearSearch = () => {
    return {type: CLEAR_SEARCH};
};

export const setSearchResultsSpinner = () => {
    return {type: SET_SEARCH_RESULTS_SPINNER};
}

export const updateSearchResults = (query) => {
    const payload = axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${tmdbKey}&page=1`);
    return {type: UPDATE_SEARCH_RESULTS, payload};
}

export const updateSearchQuery = (query, dispatch) => {
    if(!query) {
        dispatch(clearSearch());
    } else {
        dispatch({type: UPDATE_SEARCH_QUERY, payload: query});
        setTimeout(() => dispatch(setSearchResultsSpinner()), 200); // don't immediately show spinner
        dispatch(updateSearchResults(query)); // async
    }
};