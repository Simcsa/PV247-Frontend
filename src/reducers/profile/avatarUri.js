import { PROFILE_AVATAR_UPDATE } from '../../constants/actionTypes';

export const avatarUri = (prevState = null, action) => {
    switch (action.type) {
        case PROFILE_AVATAR_UPDATE:
            return action.payload.avatarUri;

        default:
            return prevState;
    }
};
