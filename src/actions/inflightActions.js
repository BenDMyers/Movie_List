import axios from 'axios';

import {RECOMMEND_MOVIE, RESOLVE_INFLIGHT_MOVIE, RESOLVE_INFLIGHT_UNVOTE, RESOLVE_INFLIGHT_VOTE, UNVOTE, VOTE} from '../actions/types';
import {getMovies} from './moviesActions';

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
            dispatch(getMovies());
            dispatch(resolveInflightMovie(id));
        }).catch(err => {
            console.log(err);
            dispatch(resolveInflightMovie(id));
        });
};

export const vote = (movieId, dispatch, uuid) => {
    dispatch({type: VOTE, payload: movieId});
    axios.post(`https://bdm-watchlist-api.herokuapp.com/movies/${movieId}/votes`, {uuid})
        .then((res) => {
            dispatch(getMovies());
            dispatch(resolveInflightVote(movieId));
        }).catch(err => {
            console.log(err);
            dispatch(resolveInflightVote(movieId));
        });
};

export const unvote = (movieId, dispatch, uuid) => {
    dispatch({type: UNVOTE, payload: movieId});
    axios.delete(`https://bdm-watchlist-api.herokuapp.com/movies/${movieId}/votes`, {data: {uuid}})
        .then((res) => {
            dispatch(getMovies());
            dispatch(resolveInflightUnvote(movieId));
        }).catch(err => {
            console.log(err);
            dispatch(resolveInflightUnvote(movieId));
        });
};