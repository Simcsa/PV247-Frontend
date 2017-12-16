import { getPersistedToken, getPersistedUserEmail } from './getPersistedToken';
import * as Immutable from 'immutable';

export const getInitialState = () => ({
    shared: {
        token: getPersistedToken(),
        userEmail: getPersistedUserEmail(),
    },
    channels: {
        isUpdatingChannels: false,
    },
    messages: {
        messagesList: Immutable.List(),
        isFetchingMessages: false,
    }
});
