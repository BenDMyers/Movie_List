import axios from 'axios';

import {RECOMMEND_MOVIE, RESOLVE_INFLIGHT_MOVIE} from '../actions/types';
import {getMovies} from './moviesActions';

export const resolveInflightMovie = (id) => {
    return {type: RESOLVE_INFLIGHT_MOVIE, payload: id};
};

export const recommend = (id, dispatch) => {
    console.log('recommend');
    dispatch({type: RECOMMEND_MOVIE, payload: id});
    axios.post('https://bdm-watchlist-api.herokuapp.com/movies/', {id})
        .then((res) => {
            console.log(res);
            dispatch(getMovies());
            dispatch(resolveInflightMovie(id));
        }).catch(err => {
            console.log(err);
            dispatch(resolveInflightMovie(id));
        })
};