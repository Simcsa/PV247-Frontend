import {
    MESSAGE_SEND_STARTED,
    MESSAGE_SEND_FAILED,
    MESSAGE_SEND_FINISHED,
} from '../../constants/actionTypes';

export const isSendingMessage = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGE_SEND_STARTED:
            return true;

        case MESSAGE_SEND_FINISHED:
        case MESSAGE_SEND_FAILED:
            return false;

        default:
            return prevState;
    }
};
