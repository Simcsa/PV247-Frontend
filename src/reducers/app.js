import { combineReducers } from 'redux';
import { shared } from "./shared/shared";
import { reducer as formReducer } from 'redux-form';
import { channels } from "./channels/channels";
import { messages } from "./messages/messages";

export const app = combineReducers({
    shared,
    channels,
    messages,
    form: formReducer,
});