import {
    CHANNEL_CREATE_STARTED,
    CHANNEL_CREATE_FINISHED,
    CHANNEL_CREATE_FAILED,
    CHANNEL_DELETE_STARTED,
    CHANNEL_RENAME_STARTED,
    CHANNEL_DELETE_FINISHED,
    CHANNEL_DELETE_FAILED,
    CHANNEL_RENAME_FINISHED,
    CHANNEL_RENAME_FAILED,
} from '../../constants/actionTypes';

export const isUpdatingChannels = (prevState = false, action) => {
    switch (action.type) {
        case CHANNEL_CREATE_STARTED:
        case CHANNEL_DELETE_STARTED:
        case CHANNEL_RENAME_STARTED:
            return true;

        case CHANNEL_CREATE_FINISHED:
        case CHANNEL_CREATE_FAILED:
        case CHANNEL_DELETE_FINISHED:
        case CHANNEL_DELETE_FAILED:
        case CHANNEL_RENAME_FINISHED:
        case CHANNEL_RENAME_FAILED:
            return false;

        default:
            return prevState;
    }
};
