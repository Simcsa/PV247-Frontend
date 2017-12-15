import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    FETCH_CHANNELS_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_CHANNELS_URI } from "../../constants/api";
import {
    failFetchingChannels,
    finishFetchingChannels,
    startFetchingChannels,
} from "./actionCreators";
import { getRequest } from "../../utils/api/getRequest";
import { convertChannelsFromServerDetails } from "../../utils/api/conversions";

export const fetchChannels = () =>
    (dispatch, getState) => {
        dispatch(startFetchingChannels());

        const token = getState().shared.token;

        return getRequest(API_CHANNELS_URI, token)
            .then((details) => {
                dispatch(finishFetchingChannels(convertChannelsFromServerDetails(details)));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failFetchingChannels(FETCH_CHANNELS_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
