import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import promise from 'redux-promise';
import {save, load} from 'redux-localstorage-simple';

import './index.css';
import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promise, save({states: ['user']}))(createStore);
const store = createStoreWithMiddleware(
    reducers,
    load({states: ['user']}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);