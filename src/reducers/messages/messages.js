import { combineReducers } from 'redux';
import { messagesList } from "./messagesList";
import { isFetchingMessages } from "./isFetchingMessages";
import { isSendingMessage } from "./isSendingMessage";
import { isDeletingMessage } from "./isDeletingMessage";

export const messages = combineReducers({
    messagesList,
    isFetchingMessages,
    isSendingMessage,
    isDeletingMessage,
});
