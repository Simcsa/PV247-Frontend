import {
    PROFILE_AVATAR_FETCH_STARTED,
    PROFILE_AVATAR_FETCH_FAILED,
    PROFILE_AVATAR_UPDATE,
} from '../../constants/actionTypes';

export const isFetchingAvatar = (prevState = false, action) => {
    switch (action.type) {
        case PROFILE_AVATAR_FETCH_STARTED:
            return true;

        case PROFILE_AVATAR_FETCH_FAILED:
        case PROFILE_AVATAR_UPDATE:
            return false;

        default:
            return prevState;
    }
};
