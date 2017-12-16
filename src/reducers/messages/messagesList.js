import * as Immutable from 'immutable';
import {
    FETCH_CHANNELS_STARTED,
    FETCH_MESSAGES_FINISHED,
    FETCH_MESSAGES_FAILED, SEND_MESSAGE_FINISHED,
} from '../../constants/actionTypes';

export const messagesList = (prevState = Immutable.List(), action) => {
    switch (action.type) {
        case FETCH_MESSAGES_FINISHED:
            return Immutable.List(action.payload.messages);

        case SEND_MESSAGE_FINISHED:
            return prevState.unshift(action.payload.message);

        case FETCH_CHANNELS_STARTED:
        case FETCH_MESSAGES_FAILED:
            return Immutable.List();

        default:
            return prevState;
    }
};
