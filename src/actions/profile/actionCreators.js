import * as actionTypes from '../../constants/actionTypes';
import { errorActionFactory } from '../../utils/errorActionFactory';

export const startFetchingProfileDetails = () => ({
    type: actionTypes.PROFILE_DETAILS_FETCH_STARTED,
});

export const failFetchingProfileDetails = errorActionFactory(actionTypes.PROFILE_DETAILS_FETCH_FAILED);

export const startFetchingProfilePicture = () => ({
    type: actionTypes.PROFILE_AVATAR_FETCH_STARTED,
});

export const failFetchingProfilePicture = errorActionFactory(actionTypes.PROFILE_AVATAR_FETCH_FAILED);

export const finishFetchingProfilePicture = () => ({
    type: actionTypes.PROFILE_AVATAR_FETCH_FINISHED,
});


export const updateProfileDetails = (details) => ({
    type: actionTypes.PROFILE_DETAILS_UPDATE,
    payload: {
        details,
    }
});

export const updateProfilePicture = (avatarUri) => ({
    type: actionTypes.PROFILE_AVATAR_UPDATE,
    payload: {
        avatarUri,
    }
});

export const startUploadingProfileDetails = () => ({
    type: actionTypes.PROFILE_DETAILS_UPDATE_STARTED,
});

export const failUploadingProfileDetails = errorActionFactory(actionTypes.PROFILE_DETAILS_UPDATE_FAILED);

export const startUploadingProfileAvatar = () => ({
    type: actionTypes.PROFILE_AVATAR_UPDATE_STARTED,
});

export const failUploadingProfileAvatar = errorActionFactory(actionTypes.PROFILE_AVATAR_UPDATE_FAILED);




