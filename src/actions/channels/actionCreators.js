import * as actionTypes from '../../constants/actionTypes';
import { errorActionFactory } from "../../utils/errorActionFactory";

export const startFetchingChannels = () => ({
    type: actionTypes.FETCH_CHANNELS_STARTED,
});

export const failFetchingChannels = errorActionFactory(actionTypes.FETCH_CHANNELS_FAILED);

export const finishFetchingChannels = (channels) => ({
    type: actionTypes.FETCH_CHANNELS_FINISHED,
    payload: {
        channels,
    }
});

export const createChannel = (name) => ({
    type: actionTypes.CHANNEL_CREATE,
    payload: {
        name,
    }
});
