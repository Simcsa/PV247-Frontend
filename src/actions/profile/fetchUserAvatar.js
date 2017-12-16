import {
    failFetchingProfilePicture,
    startFetchingProfilePicture,
    updateProfilePicture
} from './actionCreators';
import { API_GET_FILE_DOWNLOAD_LINK_URI } from '../../constants/api';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import { getRequest } from "../../utils/api/getRequest";
import { AVATAR_FETCH_FAILED_MESSAGE } from "../../constants/uiConstants";

export const fetchUserAvatar = (avatarId) =>
    async (dispatch, getState) => {
        dispatch(startFetchingProfilePicture());

        const authToken = getState().shared.token;

        try {
            return await performAuthorizedRequest(dispatch, async () => {
                const avatarUri = await getRequest(API_GET_FILE_DOWNLOAD_LINK_URI(avatarId), authToken);
                dispatch(updateProfilePicture(avatarUri));
            });
        }
        catch (error) {
            return dispatch(failFetchingProfilePicture(AVATAR_FETCH_FAILED_MESSAGE, error));
        }
    };
