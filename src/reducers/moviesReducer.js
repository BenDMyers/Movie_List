import {GET_MOVIES} from '../actions/types';
import {sortByVotesThenTitle, maintainOrder} from '../utils/comparators';

const DEFAULT_STATE = {
    alreadyWatched: [],
    recommended: [],
    watched: [],
    all: []
}

export const moviesReducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case GET_MOVIES:
            // Combine all lists in response into one big list
            let all = [];
            if(action.payload.data) {
                all = Object.values(action.payload.data).reduce((acc, cur) => {
                    return acc = [...acc, ...cur];
                }, []);

                action.meta.triggerSort && action.payload.data.recommended.sort(sortByVotesThenTitle);
                action.meta.maintainOrder && action.payload.data.recommended.sort(maintainOrder([...state.recommended]));
            }
            return {...DEFAULT_STATE, ...action.payload.data, all};
        default:
            return state;
    }
}

export default moviesReducer;