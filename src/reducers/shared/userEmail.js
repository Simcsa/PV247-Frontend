import {
    SHARED_AUTHENTICATION_TOKEN_RECEIVED,
    SHARED_AUTHENTICATION_INVALIDATE_TOKEN,
    SHARED_AUTHENTICATION_FAILED,
} from '../../constants/actionTypes';

export const userEmail = (prevState = null, action) => {
    switch (action.type) {
        case SHARED_AUTHENTICATION_TOKEN_RECEIVED:
            return action.payload.userEmail;

        case SHARED_AUTHENTICATION_FAILED:
        case SHARED_AUTHENTICATION_INVALIDATE_TOKEN:
            return null;

        default:
            return prevState;
    }
};
