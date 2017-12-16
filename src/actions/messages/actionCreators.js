import * as actionTypes from "../../constants/actionTypes";
import { errorActionFactory } from "../../utils/errorActionFactory";

export const startFetchingMessages = () => ({
    type: actionTypes.FETCH_MESSAGES_STARTED,
});

export const failFetchingMessages = errorActionFactory(actionTypes.FETCH_MESSAGES_FAILED);

export const finishFetchingMessages = (messages) => ({
    type: actionTypes.FETCH_MESSAGES_FINISHED,
    payload: {
        messages,
    }
});

export const startSendingMessage = () => ({
    type: actionTypes.SEND_MESSAGE_STARTED,
});

export const failSendingMessage = errorActionFactory(actionTypes.SEND_MESSAGE_FAILED);

export const finishSendingMessage = (message) => ({
    type: actionTypes.SEND_MESSAGE_FINISHED,
    payload: {
        message,
    }
});