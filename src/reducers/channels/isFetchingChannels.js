import {
    FETCH_CHANNELS_STARTED,
    FETCH_CHANNELS_FINISHED,
    FETCH_CHANNELS_FAILED,
} from '../../constants/actionTypes';

export const isFetchingChannels = (prevState = false, action) => {
    switch (action.type) {
        case FETCH_CHANNELS_STARTED:
            return true;

        case FETCH_CHANNELS_FINISHED:
        case FETCH_CHANNELS_FAILED:
            return false;

        default:
            return prevState;
    }
};
