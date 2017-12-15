import * as Immutable from 'immutable';
import {
    SHARED_DISMISS_ERROR,
    SHARED_AUTHENTICATION_FAILED,
    FETCH_CHANNELS_FAILED,
    SHARED_REGISTRATION_FAILED,
    CREATE_CHANNEL_FAILED,
    DELETE_CHANNEL_FAILED,
    RENAME_CHANNEL_FAILED,
    CHANNEL_INVITE_USER_FAILED,
} from '../../constants/actionTypes';
import { LOCATION_CHANGE } from 'connected-react-router';

export const errors = (previousState = Immutable.OrderedMap(), action) => {
    switch (action.type) {
        case SHARED_AUTHENTICATION_FAILED:
        case SHARED_REGISTRATION_FAILED:
        case FETCH_CHANNELS_FAILED:
        case CREATE_CHANNEL_FAILED:
        case DELETE_CHANNEL_FAILED:
        case RENAME_CHANNEL_FAILED:
        case CHANNEL_INVITE_USER_FAILED:
            return previousState.set(action.payload.error.id, { ...action.payload.error });

        case SHARED_DISMISS_ERROR:
            return previousState.delete(action.payload.errorId);

        case LOCATION_CHANGE:
            return previousState.clear();

        default:
            return previousState;
    }
};
