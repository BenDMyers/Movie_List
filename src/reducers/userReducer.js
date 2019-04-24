import {SET_USER} from '../actions/types';

export const userReducer = (state='', action) => {
    switch(action.type) {
        case SET_USER:
            if(state) {return state;}
            return action.payload;
        default:
            return state;
    }
}

export default userReducer;