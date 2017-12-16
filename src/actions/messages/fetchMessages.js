import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    MESSAGES_FETCH_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_MESSAGES_URI } from "../../constants/api";
import {
    failFetchingMessages,
    finishFetchingMessages,
    startFetchingMessages,
} from "./actionCreators";
import { getRequest } from "../../utils/api/getRequest";
import { convertMessagesFromServerDetails } from "../../utils/api/conversions";

export const fetchMessages = (channelId) =>
    (dispatch, getState) => {
        dispatch(startFetchingMessages());

        const token = getState().shared.token;

        return getRequest(API_MESSAGES_URI(channelId), token)
            .then((details) => {
                dispatch(finishFetchingMessages(convertMessagesFromServerDetails(details)));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failFetchingMessages(MESSAGES_FETCH_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
