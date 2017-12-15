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

export const startCreatingChannel = () => ({
    type: actionTypes.CREATE_CHANNEL_STARTED,
});

export const failCreatingChannel = errorActionFactory(actionTypes.CREATE_CHANNEL_FAILED);

export const finishCreatingChannel = (channels) => ({
    type: actionTypes.CREATE_CHANNEL_FINISHED,
    payload: {
        channels,
    }
});

export const startDeletingChannel = () => ({
    type: actionTypes.DELETE_CHANNEL_STARTED,
});

export const failDeletingChannel = errorActionFactory(actionTypes.DELETE_CHANNEL_FAILED);

export const finishDeletingChannel = (channels) => ({
    type: actionTypes.DELETE_CHANNEL_FINISHED,
    payload: {
        channels,
    }
});

export const startRenamingChannel = () => ({
    type: actionTypes.RENAME_CHANNEL_STARTED,
});

export const failRenamingChannel = errorActionFactory(actionTypes.RENAME_CHANNEL_FAILED);

export const finishRenamingChannel = (channels) => ({
    type: actionTypes.RENAME_CHANNEL_FINISHED,
    payload: {
        channels,
    }
});