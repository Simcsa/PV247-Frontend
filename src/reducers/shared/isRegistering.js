import {
    SHARED_REGISTRATION_STARTED,
    SHARED_REGISTRATION_FAILED,
    SHARED_REGISTRATION_FINISHED,
} from '../../constants/actionTypes';

export const isRegistering = (prevState = false, action) => {
    switch (action.type) {
        case SHARED_REGISTRATION_STARTED:
            return true;

        case SHARED_REGISTRATION_FINISHED:
        case SHARED_REGISTRATION_FAILED:
            return false;

        default:
            return prevState;
    }
};
