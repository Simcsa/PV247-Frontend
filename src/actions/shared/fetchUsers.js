import {
    dismissError,
} from '../shared/actionCreators';
import {
    MILISECONDS_TO_AUTO_DISMISS_ERROR,
    USERS_FETCH_FAILED_MESSAGE
} from '../../constants/uiConstants';
import { API_GET_FILE_DOWNLOAD_LINK_URI, API_GET_USERS_URI } from "../../constants/api";
import {
    failFetchingUsers,
    fetchUsersFinished,
} from "./actionCreators";
import { getRequest } from "../../utils/api/getRequest";
import { convertUsersFromServerDetails } from "../../utils/api/conversions";

export const fetchUsers = () =>
    (dispatch, getState) => {
        const token = getState().shared.token;

        return getRequest(API_GET_USERS_URI, token)
            .then((details) => {
                const users = convertUsersFromServerDetails(details);
                return Promise.all(users.map(async (user) => {
                    return {
                        ...user,
                        avatarUri: user.avatarId && await getRequest(API_GET_FILE_DOWNLOAD_LINK_URI(user.avatarId), token),
                    }
                }));
            })
            .then((users) => {
                dispatch(fetchUsersFinished(users));
            })
            .catch((error) => {
                const dispatchedAction = dispatch(failFetchingUsers(USERS_FETCH_FAILED_MESSAGE, error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), MILISECONDS_TO_AUTO_DISMISS_ERROR);
            });
    };
