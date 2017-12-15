import { combineReducers } from 'redux';
import { shared } from "./shared/shared";
import { reducer as formReducer } from 'redux-form';
import { channels } from "./channels/channels";

export const app = combineReducers({
    shared,
    channels,
    form: formReducer,
});