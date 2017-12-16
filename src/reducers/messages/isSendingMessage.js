import {
    SEND_MESSAGE_STARTED,
    SEND_MESSAGE_FAILED,
    SEND_MESSAGE_FINISHED,
} from '../../constants/actionTypes';

export const isSendingMessage = (prevState = false, action) => {
    switch (action.type) {
        case SEND_MESSAGE_STARTED:
            return true;

        case SEND_MESSAGE_FINISHED:
        case SEND_MESSAGE_FAILED:
            return false;

        default:
            return prevState;
    }
};
