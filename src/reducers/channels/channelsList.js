import {
    CHANNELS_FETCH_STARTED,
    CHANNELS_FETCH_FINISHED,
    CHANNELS_FETCH_FAILED,
    CHANNEL_CREATE_FINISHED,
    CHANNEL_DELETE_FINISHED,
    CHANNEL_RENAME_FINISHED,
    CHANNEL_INVITE_USER_FINISHED,
} from '../../constants/actionTypes';

export const channelsList = (prevState = null, action) => {
    switch (action.type) {
        case CHANNELS_FETCH_FINISHED:
        case CHANNEL_CREATE_FINISHED:
        case CHANNEL_DELETE_FINISHED:
        case CHANNEL_RENAME_FINISHED:
        case CHANNEL_INVITE_USER_FINISHED:
            return action.payload.channels;

        case CHANNELS_FETCH_STARTED:
        case CHANNELS_FETCH_FAILED:
            return null;

        default:
            return prevState;
    }
};
