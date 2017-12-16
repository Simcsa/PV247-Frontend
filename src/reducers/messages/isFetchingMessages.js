import {
    MESSAGES_FETCH_STARTED,
    MESSAGES_FETCH_FINISHED,
    MESSAGES_FETCH_FAILED,
} from '../../constants/actionTypes';

export const isFetchingMessages = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGES_FETCH_STARTED:
            return true;

        case MESSAGES_FETCH_FINISHED:
        case MESSAGES_FETCH_FAILED:
            return false;

        default:
            return prevState;
    }
};
