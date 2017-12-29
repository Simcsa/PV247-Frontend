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

export const registerUser = (userDetails, destinationLocation) =>
    (dispatch) => {
        dispatch(startRegistration());

        const serverDetails = {
            email: userDetails.email,
            customData: JSON.stringify({
                fullName: userDetails.fullName,
            }),
        };

        return postRequest(API_CREATE_USER_URI, EXAMPLE_USER_TOKEN, serverDetails)
            .then(() => {
                dispatch(finishRegistration());
                dispatch(push(destinationLocation));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failRegistration(REGISTRATION_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
