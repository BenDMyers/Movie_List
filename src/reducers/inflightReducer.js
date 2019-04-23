import {RECOMMEND_MOVIE, RESOLVE_INFLIGHT_MOVIE} from '../actions/types';

const DEFAULT_STATE = {
    movies: []
};

export const inflightReducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case RECOMMEND_MOVIE:
            return {...state, movies: [...state.movies, action.payload]};
        case RESOLVE_INFLIGHT_MOVIE:
            let movies = [...state.movies].filter(m => m !== action.payload);
            return {...state, movies}
        default:
            return state;
    }
}

export default inflightReducer;