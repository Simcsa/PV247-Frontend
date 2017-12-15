import { combineReducers } from 'redux';
import { isAuthenticating } from './isAuthenticating';
import { token } from "./token";
import { errors } from "./errors";
import { isRegistering } from "./isRegistering";
import { userEmail } from "./userEmail";

export const shared = combineReducers({
    isAuthenticating,
    isRegistering,
    token,
    userEmail,
    errors,
});
