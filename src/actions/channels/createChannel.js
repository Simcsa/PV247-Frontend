import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    CREATE_CHANNEL_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_CHANNELS_URI } from "../../constants/api";
import {
    failCreatingChannel,
    finishCreatingChannel,
    startCreatingChannel,
} from "./actionCreators";
import { convertChannelsFromServerDetails } from "../../utils/api/conversions";
import { patchRequest } from "../../utils/api/patchRequest";

export const createChannel = (channelName) =>
    (dispatch, getState) => {
        dispatch(startCreatingChannel());

        const { token, userEmail } = getState().shared;

        const channels = [{
            path: "/channels/-",
            op: "add",
            value: {
                name: channelName,
                customData: JSON.stringify({
                    owner: userEmail
                }),
            }
        }];

        return patchRequest(API_CHANNELS_URI, token, channels)
            .then((details) => {
                dispatch(finishCreatingChannel(convertChannelsFromServerDetails(details)));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failCreatingChannel(CREATE_CHANNEL_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
