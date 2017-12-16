import {
    CHANNELS_FETCH_STARTED,
    CHANNELS_FETCH_FINISHED,
    CHANNELS_FETCH_FAILED,
} from '../../constants/actionTypes';

export const isFetchingChannels = (prevState = false, action) => {
    switch (action.type) {
        case CHANNELS_FETCH_STARTED:
            return true;

        case CHANNELS_FETCH_FINISHED:
        case CHANNELS_FETCH_FAILED:
            return false;

        default:
            return prevState;
    }
};
