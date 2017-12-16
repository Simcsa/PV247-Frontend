import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    CHANNEL_RENAME_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_CHANNELS_URI } from "../../constants/api";
import {
    failRenamingChannel,
    finishRenamingChannel,
    startRenamingChannel,
} from "./actionCreators";
import { convertChannelsFromServerDetails } from "../../utils/api/conversions";
import { patchRequest } from "../../utils/api/patchRequest";

export const renameChannel = (channel, channelName) =>
    (dispatch, getState) => {
        dispatch(startRenamingChannel());

        const token = getState().shared.token;

        const channels = [{
            path: "/channels/" + channel.id,
            op: "replace",
            value: {
                customData: JSON.stringify({
                    owner: channel.owner,
                }),
                id: channel.id,
                name: channelName,
            }
        }];

        return patchRequest(API_CHANNELS_URI, token, channels)
            .then((details) => {
                dispatch(finishRenamingChannel(convertChannelsFromServerDetails(details)));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failRenamingChannel(CHANNEL_RENAME_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
