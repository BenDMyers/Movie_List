import {GET_MOVIES} from '../actions/types';

const DEFAULT_STATE = {
    alreadyWatched: [],
    recommended: [],
    watched: []
}

export const moviesReducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case GET_MOVIES:
            return {...DEFAULT_STATE, ...action.payload.data};
        default:
            return state;
    }
}

export default moviesReducer;