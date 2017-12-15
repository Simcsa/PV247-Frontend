import {
    CREATE_CHANNEL_STARTED,
    CREATE_CHANNEL_FINISHED,
    CREATE_CHANNEL_FAILED,
    DELETE_CHANNEL_STARTED,
    RENAME_CHANNEL_STARTED,
    DELETE_CHANNEL_FINISHED,
    DELETE_CHANNEL_FAILED,
    RENAME_CHANNEL_FINISHED,
    RENAME_CHANNEL_FAILED,
} from '../../constants/actionTypes';

export const isUpdatingChannels = (prevState = false, action) => {
    switch (action.type) {
        case CREATE_CHANNEL_STARTED:
        case DELETE_CHANNEL_STARTED:
        case RENAME_CHANNEL_STARTED:
            return true;

        case CREATE_CHANNEL_FINISHED:
        case CREATE_CHANNEL_FAILED:
        case DELETE_CHANNEL_FINISHED:
        case DELETE_CHANNEL_FAILED:
        case RENAME_CHANNEL_FINISHED:
        case RENAME_CHANNEL_FAILED:
            return false;

        default:
            return prevState;
    }
};
