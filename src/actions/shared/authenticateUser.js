import { push } from 'connected-react-router';
import {
    dismissError,
    receiveValidToken,
    failAuthentication,
    startAuthentication
} from '../shared/actionCreators';
import * as keys from '../../constants/localStorageKeys';
import { fetchAuthToken } from '../../utils/api/fetchAuthToken';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    AUTHENTICATION_FAILED_MESSAGE
} from '../../constants/uiConstants';

export const authenticateUser = (userEmail, destinationLocation) =>
    (dispatch) => {
        dispatch(startAuthentication());

        return fetchAuthToken(userEmail)
            .then((token) => {
                dispatch(receiveValidToken(token, userEmail));
                dispatch(push(destinationLocation));

                localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(token));
                localStorage.setItem(keys.SHARED_USER_EMAIL, JSON.stringify(userEmail));
                localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failAuthentication(AUTHENTICATION_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
