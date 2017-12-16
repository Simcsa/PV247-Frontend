import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    MESSAGE_DELETE_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_DELETE_MESSAGE_URI } from "../../constants/api";
import {
    failDeletingMessage,
    finishDeletingMessage,
    startDeletingMessage,
} from "./actionCreators";
import { deleteRequest } from "../../utils/api/deleteRequest";

export const deleteMessage = (channelId, messageId) =>
    (dispatch, getState) => {
        dispatch(startDeletingMessage());

        const token = getState().shared.token;

        return deleteRequest(API_DELETE_MESSAGE_URI(channelId, messageId), token)
            .then(dispatch(finishDeletingMessage(messageId)))
            .catch((error) => {
                const dispatchedAction = dispatch(failDeletingMessage(MESSAGE_DELETE_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
