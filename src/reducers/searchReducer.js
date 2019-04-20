import {CLEAR_SEARCH, SET_SEARCH_RESULTS_SPINNER, UPDATE_SEARCH_QUERY, UPDATE_SEARCH_RESULTS} from '../actions/types';

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
        case SET_SEARCH_RESULTS_SPINNER:
            if(state.loading) {return {...state, loading: 'spin'};}
            return state;
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