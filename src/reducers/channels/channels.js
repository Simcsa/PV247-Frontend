import { combineReducers } from 'redux';
import { isFetchingChannels } from "./isFetchingChannels";
import { channelsList } from "./channelsList";

export const channels = combineReducers({
    isFetchingChannels,
    channelsList,
});
