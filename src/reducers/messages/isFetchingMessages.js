import {
    FETCH_MESSAGES_STARTED,
    FETCH_MESSAGES_FINISHED,
    FETCH_MESSAGES_FAILED,
} from '../../constants/actionTypes';

export const isFetchingMessages = (prevState = false, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_STARTED:
            return true;

        case FETCH_MESSAGES_FINISHED:
        case FETCH_MESSAGES_FAILED:
            return false;

        default:
            return prevState;
    }
};
