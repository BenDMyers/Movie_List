import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';
import Cookies from 'js-cookie';
import {createCookieMiddleware} from 'redux-cookie';

import './index.css';
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise, createCookieMiddleware(Cookies))(createStore);
const store = createStoreWithMiddleware(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);