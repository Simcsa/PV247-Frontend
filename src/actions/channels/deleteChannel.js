import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    DELETE_CHANNEL_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_CHANNELS_URI } from "../../constants/api";
import {
    failDeletingChannel,
    finishDeletingChannel,
    startDeletingChannel,
} from "./actionCreators";
import { convertChannelsFromServerDetails } from "../../utils/api/conversions";
import { patchRequest } from "../../utils/api/patchRequest";

export const deleteChannel = (channelId) =>
    (dispatch, getState) => {
        dispatch(startDeletingChannel());

        const token = getState().shared.token;

        const channels = [{
            path: "/channels/" + channelId,
            op: "remove",
        }];

        return patchRequest(API_CHANNELS_URI, token, channels)
            .then((details) => {
                dispatch(finishDeletingChannel(convertChannelsFromServerDetails(details)));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failDeletingChannel(DELETE_CHANNEL_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
