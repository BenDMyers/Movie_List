import {SET_USER} from './types';

export const setUser = (uuid) => {
    return {
        type: SET_USER,
        payload: uuid
    };
};