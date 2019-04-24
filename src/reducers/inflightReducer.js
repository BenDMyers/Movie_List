import {RECOMMEND_MOVIE, RESOLVE_INFLIGHT_MOVIE, RESOLVE_INFLIGHT_UNVOTE, RESOLVE_INFLIGHT_VOTE, UNVOTE, VOTE} from '../actions/types';

const DEFAULT_STATE = {
    movies: [],
    unvotes: [],
    votes: []
};

export const inflightReducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case RECOMMEND_MOVIE:
            return {...state, movies: [...state.movies, action.payload]};
        case RESOLVE_INFLIGHT_MOVIE:
            let movies = [...state.movies].filter(m => m !== action.payload);
            return {...state, movies}
        case VOTE:
            return {...state, votes: [...state.votes, action.payload]};
        case RESOLVE_INFLIGHT_VOTE:
            let votes = [...state.votes].filter(m => m !== action.payload);
            return {...state, votes}
        default:
            return state;
    }
}

export default inflightReducer;