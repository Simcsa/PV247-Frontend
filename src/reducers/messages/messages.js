import { combineReducers } from 'redux';
import { messagesList } from "./messagesList";
import { isFetchingMessages } from "./isFetchingMessages";
import { isSendingMessage } from "./isSendingMessage";

export const messages = combineReducers({
    messagesList,
    isFetchingMessages,
    isSendingMessage,
});
