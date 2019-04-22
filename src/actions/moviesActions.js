import axios from 'axios';

import {GET_MOVIES, RECOMMEND_MOVIE} from './types';

export const getMovies = () => {
    const payload = axios.get('https://bdm-watchlist-api.herokuapp.com/movies/');
    return {type: GET_MOVIES, payload};
};

export const recommend = (id, dispatch) => {
    console.log('recommend');
    axios.post('https://bdm-watchlist-api.herokuapp.com/movies/', {id})
        .then((res) => {
            console.log(res);
            dispatch({type: RECOMMEND_MOVIE});
            dispatch(getMovies());
        }).catch(err => {
            console.log(err)
        })
}