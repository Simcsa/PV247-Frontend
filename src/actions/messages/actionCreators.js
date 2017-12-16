import * as actionTypes from "../../constants/actionTypes";
import { errorActionFactory } from "../../utils/errorActionFactory";

export const startFetchingMessages = () => ({
    type: actionTypes.MESSAGES_FETCH_STARTED,
});

export const failFetchingMessages = errorActionFactory(actionTypes.MESSAGES_FETCH_FAILED);

export const finishFetchingMessages = (messages) => ({
    type: actionTypes.MESSAGES_FETCH_FINISHED,
    payload: {
        messages,
    }
});

export const startSendingMessage = () => ({
    type: actionTypes.MESSAGE_SEND_STARTED,
});

export const failSendingMessage = errorActionFactory(actionTypes.MESSAGE_SEND_FAILED);

export const finishSendingMessage = (message) => ({
    type: actionTypes.MESSAGE_SEND_FINISHED,
    payload: {
        message,
    }
});