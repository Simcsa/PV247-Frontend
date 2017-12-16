import { PROFILE_DETAILS_UPDATE } from '../../constants/actionTypes';

const defaultDetails = {
    email: '',
    fullName: '',
};

export const details = (prevState = defaultDetails, action) => {
    switch (action.type) {
        case PROFILE_DETAILS_UPDATE:
            return action.payload.details;

        default:
            return prevState;
    }
};
