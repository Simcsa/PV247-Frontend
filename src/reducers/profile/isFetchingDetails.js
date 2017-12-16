import {
    PROFILE_DETAILS_FETCH_STARTED,
    PROFILE_DETAILS_FETCH_FAILED,
    PROFILE_DETAILS_UPDATE,
} from '../../constants/actionTypes';

export const isFetchingDetails = (prevState = false, action) => {
    switch (action.type) {
        case PROFILE_DETAILS_FETCH_STARTED:
            return true;

        case PROFILE_DETAILS_FETCH_FAILED:
        case PROFILE_DETAILS_UPDATE:
            return false;

        default:
            return prevState;
    }
};
