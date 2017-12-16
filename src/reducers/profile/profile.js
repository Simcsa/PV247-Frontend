import { combineReducers } from 'redux';
import { isFetchingDetails } from "./isFetchingDetails";
import { isFetchingAvatar } from "./isFetchingAvatar";
import { avatarUri } from "./avatarUri";
import { details } from "./details";
import { isUploadingAvatar } from "./isUploadingAvatar";

export const profile = combineReducers({
    isFetchingDetails,
    isFetchingAvatar,
    details,
    isUploadingAvatar,
    avatarUri,
});
