import * as actionTypes from '../../constants/actionTypes';
import { errorActionFactory } from "../../utils/errorActionFactory";

export const startFetchingChannels = () => ({
    type: actionTypes.CHANNELS_FETCH_STARTED,
});

export const failFetchingChannels = errorActionFactory(actionTypes.CHANNELS_FETCH_FAILED);

export const finishFetchingChannels = (channels) => ({
    type: actionTypes.CHANNELS_FETCH_FINISHED,
    payload: {
        channels,
    }
});

export const startCreatingChannel = () => ({
    type: actionTypes.CHANNEL_CREATE_STARTED,
});

export const failCreatingChannel = errorActionFactory(actionTypes.CHANNEL_CREATE_FAILED);

export const finishCreatingChannel = (channels) => ({
    type: actionTypes.CHANNEL_CREATE_FINISHED,
    payload: {
        channels,
    }
});

export const startDeletingChannel = () => ({
    type: actionTypes.CHANNEL_DELETE_STARTED,
});

export const failDeletingChannel = errorActionFactory(actionTypes.CHANNEL_DELETE_FAILED);

export const finishDeletingChannel = (channels) => ({
    type: actionTypes.CHANNEL_DELETE_FINISHED,
    payload: {
        channels,
    }
});

export const startRenamingChannel = () => ({
    type: actionTypes.CHANNEL_RENAME_STARTED,
});

export const failRenamingChannel = errorActionFactory(actionTypes.CHANNEL_RENAME_FAILED);

export const finishRenamingChannel = (channels) => ({
    type: actionTypes.CHANNEL_RENAME_FINISHED,
    payload: {
        channels,
    }
});