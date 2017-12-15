import {
    FETCH_CHANNELS_STARTED,
    FETCH_CHANNELS_FINISHED,
    FETCH_CHANNELS_FAILED,
} from '../../constants/actionTypes';

export const channelsList = (prevState = null, action) => {
    switch (action.type) {
        case FETCH_CHANNELS_FINISHED:
            return action.payload.channels;

        case FETCH_CHANNELS_STARTED:
        case FETCH_CHANNELS_FAILED:
            return null;

        default:
            return prevState;
    }
};
