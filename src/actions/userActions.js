import uuid from 'uuid/v4';
import {SET_USER} from './types';

export const setUser = () => {
    return {
        type: SET_USER,
        payload: uuid()
    };
};