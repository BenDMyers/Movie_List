import {combineReducers} from 'redux';

import inflightReducer from './inflightReducer';
import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    inflight: inflightReducer,
    movies: moviesReducer,
    search: searchReducer,
    user: userReducer
});

export default rootReducer;