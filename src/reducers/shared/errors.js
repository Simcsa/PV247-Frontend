import * as Immutable from 'immutable';
import {
    SHARED_DISMISS_ERROR,
    SHARED_AUTHENTICATION_FAILED,
    CHANNELS_FETCH_FAILED,
    SHARED_REGISTRATION_FAILED,
    CHANNEL_CREATE_FAILED,
    CHANNEL_DELETE_FAILED,
    CHANNEL_RENAME_FAILED,
    CHANNEL_INVITE_USER_FAILED,
    MESSAGE_SEND_FAILED,
    MESSAGES_FETCH_FAILED,
    PROFILE_AVATAR_FETCH_FAILED,
    PROFILE_AVATAR_UPDATE_FAILED,
    PROFILE_DETAILS_FETCH_FAILED,
    PROFILE_DETAILS_UPDATE_FAILED,
} from '../../constants/actionTypes';
import { LOCATION_CHANGE } from 'connected-react-router';

export const errors = (previousState = Immutable.OrderedMap(), action) => {
    switch (action.type) {
        case SHARED_AUTHENTICATION_FAILED:
        case SHARED_REGISTRATION_FAILED:
        case CHANNELS_FETCH_FAILED:
        case CHANNEL_CREATE_FAILED:
        case CHANNEL_DELETE_FAILED:
        case CHANNEL_RENAME_FAILED:
        case CHANNEL_INVITE_USER_FAILED:
        case MESSAGE_SEND_FAILED:
        case MESSAGES_FETCH_FAILED:
        case PROFILE_AVATAR_FETCH_FAILED:
        case PROFILE_AVATAR_UPDATE_FAILED:
        case PROFILE_DETAILS_FETCH_FAILED:
        case PROFILE_DETAILS_UPDATE_FAILED:
            return previousState.set(action.payload.error.id, { ...action.payload.error });

        case SHARED_DISMISS_ERROR:
            return previousState.delete(action.payload.errorId);

        case LOCATION_CHANGE:
            return previousState.clear();

        default:
            return previousState;
    }
};
