import { combineReducers } from 'redux';
import { isAuthenticating } from './isAuthenticating';
import { token } from "./token";
import { errors } from "./errors";
import { isRegistering } from "./isRegistering";

export const shared = combineReducers({
    isAuthenticating,
    isRegistering,
    token,
    errors,
});
