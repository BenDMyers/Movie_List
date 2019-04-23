import {getCookie} from 'redux-cookie';

import {SET_USER} from '../actions/types';

export const userReducer = (state=getCookie('BEN_MOVIES'), action) => {
    switch(action.type) {
        case SET_USER:
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;