import {
} from '../../constants/actionTypes';
import { PROFILE_AVATAR_UPDATE_STARTED } from "../../constants/actionTypes";
import { PROFILE_AVATAR_UPDATE_FAILED } from "../../constants/actionTypes";
import { PROFILE_AVATAR_UPDATE } from "../../constants/actionTypes";

export const isUploadingAvatar = (prevState = false, action) => {
    switch (action.type) {
        case PROFILE_AVATAR_UPDATE_STARTED:
            return true;

        case PROFILE_AVATAR_UPDATE_FAILED:
        case PROFILE_AVATAR_UPDATE:
            return false;

        default:
            return prevState;
    }
};
