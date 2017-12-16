import {
    startSubmit,
    stopSubmit
} from 'redux-form';
import {
    updateProfileDetails,
    failUploadingProfileDetails,
    startUploadingProfileDetails,
} from './actionCreators';
import {
    API_USER_URI
} from '../../constants/api';
import { dismissError } from '../shared/actionCreators';
import {
    convertProfileFromServerDetails,
    convertProfileToServerDetails
} from '../../utils/api/conversions';
import { DETAILS_FORM_NAME } from '../../constants/formNames';
import { performAuthorizedRequest } from '../shared/performAuthorizedRequest';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    PROFILE_DETAILS_UPDATE_FAILED_MESSAGE,
} from '../../constants/uiConstants';
import { putRequest } from "../../utils/api/putRequest";

export const uploadProfileDetails = (details) =>
    async (dispatch, getState) => {
        dispatch(startUploadingProfileDetails());
        dispatch(startSubmit(DETAILS_FORM_NAME));

        const { token, userEmail } = getState().shared;
        const serverDetails = convertProfileToServerDetails(details);

        try {
            await performAuthorizedRequest(dispatch, async () => {
                const receivedServerDetails = await putRequest(API_USER_URI(userEmail), token, serverDetails);
                const updatedDetails = convertProfileFromServerDetails(receivedServerDetails);
                return dispatch(updateProfileDetails(updatedDetails));
            });
        }
        catch (error) {
            const dispatchedAction = dispatch(failUploadingProfileDetails(PROFILE_DETAILS_UPDATE_FAILED_MESSAGE, error));
            setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
        }

        return dispatch(stopSubmit(DETAILS_FORM_NAME));
    };
