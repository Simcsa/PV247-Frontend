import { combineReducers } from 'redux';
import { shared } from "./shared/shared";
import { reducer as formReducer } from 'redux-form';
import { channels } from "./channels/channels";
import { messages } from "./messages/messages";
import { profile } from "./profile/profile";

export const app = combineReducers({
    shared,
    channels,
    messages,
    profile,
    form: formReducer,
});