import {
    FETCH_CHANNELS_STARTED,
    FETCH_CHANNELS_FINISHED,
    FETCH_CHANNELS_FAILED, CREATE_CHANNEL_FINISHED, DELETE_CHANNEL_FINISHED, RENAME_CHANNEL_FINISHED,
    CHANNEL_INVITE_USER_FINISHED,
} from '../../constants/actionTypes';

export const channelsList = (prevState = null, action) => {
    switch (action.type) {
        case FETCH_CHANNELS_FINISHED:
        case CREATE_CHANNEL_FINISHED:
        case DELETE_CHANNEL_FINISHED:
        case RENAME_CHANNEL_FINISHED:
        case CHANNEL_INVITE_USER_FINISHED:
            return action.payload.channels;

        case FETCH_CHANNELS_STARTED:
        case FETCH_CHANNELS_FAILED:
            return null;

        default:
            return prevState;
    }
};
