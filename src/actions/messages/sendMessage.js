import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    MESSAGE_SEND_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_MESSAGES_URI } from "../../constants/api";
import {
    failSendingMessage,
    finishSendingMessage,
    startSendingMessage,
} from "./actionCreators";
import { convertMessageFromServer } from "../../utils/api/conversions";
import { postRequest } from "../../utils/api/postRequest";

export const sendMessage = (channelId, value) =>
    (dispatch, getState) => {
        dispatch(startSendingMessage());

        const token = getState().shared.token;

        const message = {
            value: value,
            customData: JSON.stringify({
                upvoteCount: 0,
                downvoteCount: 0,
            }),
        };

        return postRequest(API_MESSAGES_URI(channelId), token, message)
            .then((details) => {
                dispatch(finishSendingMessage(convertMessageFromServer(details)));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failSendingMessage(MESSAGE_SEND_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
