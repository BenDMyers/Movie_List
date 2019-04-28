import axios from 'axios';

import {RECOMMEND_MOVIE, RESOLVE_INFLIGHT_MOVIE, RESOLVE_INFLIGHT_UNVOTE, RESOLVE_INFLIGHT_VOTE, UNVOTE, VOTE} from '../actions/types';
import {getMovies, TRIGGER_SORT, MAINTAIN_ORDER} from './moviesActions';

const BASE_URL = 'https://bdm-watchlist-ui.herokuapp.com';
// const BASE_URL = 'http://localhost:4000';

export const resolveInflightMovie = (id) => {
    return {type: RESOLVE_INFLIGHT_MOVIE, payload: id};
};

export const resolveInflightVote = (id) => {
    return {type: RESOLVE_INFLIGHT_VOTE, payload: id};
};

export const resolveInflightUnvote = (id) => {
    return {type: RESOLVE_INFLIGHT_UNVOTE, payload: id};
};

export const recommend = (id, dispatch) => {
    dispatch({type: RECOMMEND_MOVIE, payload: id});
    axios.post('https://bdm-watchlist-api.herokuapp.com/movies/', {id})
        .then((res) => {
            dispatch(getMovies(TRIGGER_SORT));
            dispatch(resolveInflightMovie(id));
        }).catch(err => {
            console.log(err);
            dispatch(resolveInflightMovie(id));
        });
};

export const vote = (movieId) => (dispatch, getState) => {
    let userId = getState().user;
    dispatch({type: VOTE, payload: movieId});
    axios.post(`${BASE_URL}/movies/${movieId}/votes`, {}, {auth: {username: userId}})
        .then((res) => {
            dispatch(getMovies(MAINTAIN_ORDER));
            dispatch(resolveInflightVote(movieId));
        }).catch(err => {
            console.log(err);
            dispatch(resolveInflightVote(movieId));
        });
};

export const unvote = (movieId) => (dispatch, getState) => {
    let userId = getState().user;
    dispatch({type: UNVOTE, payload: movieId});
    axios.delete(`${BASE_URL}/movies/${movieId}/votes`, {auth: {username: userId}})
        .then((res) => {
            dispatch(getMovies(MAINTAIN_ORDER));
            dispatch(resolveInflightUnvote(movieId));
        }).catch(err => {
            console.log(err);
            dispatch(resolveInflightUnvote(movieId));
        });
};