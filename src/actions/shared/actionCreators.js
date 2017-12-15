import * as actionTypes from '../../constants/actionTypes';
import { errorActionFactory } from '../../utils/errorActionFactory';

export const startAuthentication = () => ({
    type: actionTypes.SHARED_AUTHENTICATION_STARTED,
});

export const startRegistration = () => ({
    type: actionTypes.SHARED_REGISTRATION_STARTED,
});

export const receiveValidToken = (token, userEmail) => ({
    type: actionTypes.SHARED_AUTHENTICATION_TOKEN_RECEIVED,
    payload: {
        token,
        userEmail,
    }
});

export const failAuthentication = errorActionFactory(actionTypes.SHARED_AUTHENTICATION_FAILED);

export const failRegistration = errorActionFactory(actionTypes.SHARED_REGISTRATION_FAILED);

export const finishRegistration = () => ({
    type: actionTypes.SHARED_REGISTRATION_FINISHED,
});

export const invalidateToken = () => ({
    type: actionTypes.SHARED_AUTHENTICATION_INVALIDATE_TOKEN,
});

export const dismissError = (errorId) => ({
    type: actionTypes.SHARED_DISMISS_ERROR,
    payload: {
        errorId,
    }
});
