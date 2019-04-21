import {combineReducers} from 'redux';

import moviesReducer from './moviesReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer
});

export default rootReducer;