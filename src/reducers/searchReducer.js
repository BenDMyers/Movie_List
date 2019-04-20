import {CLEAR_SEARCH, UPDATE_SEARCH_QUERY, UPDATE_SEARCH_RESULTS} from '../actions/types';

const DEFAULT_STATE = {
    loading: false,
    query: '',
    results: []
};

const RESULTS_TO_SHOW = 5;

const searchReducer = (state=DEFAULT_STATE, action) => {
    switch(action.type) {
        case CLEAR_SEARCH:
            return {...DEFAULT_STATE};
        case UPDATE_SEARCH_QUERY:
            return {
                ...state,
                loading: true,
                query: action.payload
            };
        case UPDATE_SEARCH_RESULTS:
            return {
                ...state,
                loading: false,
                results: action.payload.data.results.slice(0, RESULTS_TO_SHOW)
            };
        default:
            return state;
    }
};

export default searchReducer;