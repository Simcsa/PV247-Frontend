import { combineReducers } from 'redux';
import { isFetchingChannels } from "./isFetchingChannels";
import { channelsList } from "./channelsList";
import { isUpdatingChannels } from "./isUpdatingChannels";

export const channels = combineReducers({
    isFetchingChannels,
    channelsList,
    isCreatingChannel: isUpdatingChannels,
});
