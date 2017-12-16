import * as Immutable from 'immutable';
import {
    USERS_FETCH,
    USERS_FETCH_FAILED,
} from '../../constants/actionTypes';

export const usersList = (prevState = Immutable.List(), action) => {
    switch (action.type) {
        case USERS_FETCH:
            return Immutable.List(action.payload.users);

        case USERS_FETCH_FAILED:
            return Immutable.List();

        default:
            return prevState;
    }
};
