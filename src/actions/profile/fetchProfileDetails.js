import {
    updateProfileDetails,
    failFetchingProfileDetails,
    startFetchingProfileDetails, startFetchingProfilePicture, finishFetchingProfilePicture,
} from './actionCreators';
import {
    API_USER_URI
} from '../../constants/api';
import {
    dismissError,
    failAuthentication,
    invalidateToken
} from '../shared/actionCreators';
import { convertProfileFromServerDetails } from '../../utils/api/conversions';
import {
    AUTHENTICATION_EXPIRED_MESSAGE,
    PROFILE_DETAILS_FETCH_FAILED_MESSAGE,
    MILISECONDS_TO_AUTO_DISMISS_ERROR
} from '../../constants/uiConstants';
import { fetchUserAvatar } from './fetchUserAvatar';
import { getRequest } from "../../utils/api/getRequest";

export const fetchProfileDetails = () =>
    (dispatch, getState) => {
        dispatch(startFetchingProfileDetails());
        dispatch(startFetchingProfilePicture());

        const { token, userEmail } = getState().shared;

        return getRequest(API_USER_URI(userEmail), token)
            .then((serverDetails) => dispatch(updateProfileDetails(convertProfileFromServerDetails(serverDetails))))
            .then(({ payload: {details: { avatarId } = {} } = {} }) =>
            { avatarId ? dispatch(fetchUserAvatar(avatarId)) : dispatch(finishFetchingProfilePicture())})
            .catch((error) => {
                if (error.statusCode === 401) {
                    dispatch(invalidateToken());
                    return dispatch(failAuthentication(AUTHENTICATION_EXPIRED_MESSAGE));
                }
                throw error;
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failFetchingProfileDetails(PROFILE_DETAILS_FETCH_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            })
    };
