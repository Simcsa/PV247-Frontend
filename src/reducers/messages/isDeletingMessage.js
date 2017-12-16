import {
    MESSAGE_DELETE_STARTED,
    MESSAGE_DELETE_FINISHED,
    MESSAGE_DELETE_FAILED,
} from '../../constants/actionTypes';

export const isDeletingMessage = (prevState = false, action) => {
    switch (action.type) {
        case MESSAGE_DELETE_STARTED:
            return true;

        case MESSAGE_DELETE_FINISHED:
        case MESSAGE_DELETE_FAILED:
            return false;

        default:
            return prevState;
    }
};
