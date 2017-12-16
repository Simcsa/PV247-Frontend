import {
    failAuthentication,
    invalidateToken
} from '../shared/actionCreators';
import { AUTHENTICATION_EXPIRED_MESSAGE } from '../../constants/uiConstants';

export const performAuthorizedRequest = async (dispatch, requestAction) => {
    try {
        return await requestAction();
    }
    catch (error) {
        if (error.statusCode === 401) {
            dispatch(invalidateToken());
            return dispatch(failAuthentication(AUTHENTICATION_EXPIRED_MESSAGE));
        }

        throw error;
    }
};