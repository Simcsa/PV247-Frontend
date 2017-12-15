import { push } from 'connected-react-router';
import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    REGISTRATION_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { postRequest } from "../../utils/api/postRequest";
import { API_CREATE_USER_URI, EXAMPLE_USER_TOKEN } from "../../constants/api";
import {
    failRegistration,
    finishRegistration,
    startRegistration,
} from "./actionCreators";

export const registerUser = (userEmail, userName, destinationLocation) =>
    (dispatch) => {
        dispatch(startRegistration());

        const details = {
            email: userEmail,
            customData: {
                name: userName
            },
        };

        return postRequest(API_CREATE_USER_URI, EXAMPLE_USER_TOKEN, details)
            .then(() => {
                dispatch(finishRegistration());
                dispatch(push(destinationLocation));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failRegistration(REGISTRATION_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
