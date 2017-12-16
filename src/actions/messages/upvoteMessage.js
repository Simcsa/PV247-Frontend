import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    MESSAGE_VOTE_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_UPDATE_MESSAGE_URI } from "../../constants/api";
import {
    failVotingMessage,
    finishVotingMessage,
} from "./actionCreators";
import { convertMessageFromServer } from "../../utils/api/conversions";
import { putRequest } from "../../utils/api/putRequest";

export const upvoteMessage = (channelId, message) =>
    (dispatch, getState) => {

        const token = getState().shared.token;

        const upvoteCount = message.upvoteCount + 1;

        const serverMessage = {
            value: message.value,
            customData: JSON.stringify({
                downvoteCount: message.downvoteCount,
                upvoteCount: upvoteCount,
            }),
        };

        return putRequest(API_UPDATE_MESSAGE_URI(channelId, message.id), token, serverMessage)
            .then((details) => {
                dispatch(finishVotingMessage(convertMessageFromServer(details)));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failVotingMessage(MESSAGE_VOTE_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
