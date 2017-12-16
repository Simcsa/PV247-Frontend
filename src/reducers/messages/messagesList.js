import * as Immutable from 'immutable';
import {
    CHANNELS_FETCH_STARTED,
    MESSAGES_FETCH_FINISHED,
    MESSAGES_FETCH_FAILED,
    MESSAGE_SEND_FINISHED,
    MESSAGE_DELETE_FINISHED,
} from '../../constants/actionTypes';

export const messagesList = (prevState = Immutable.List(), action) => {
    switch (action.type) {
        case MESSAGES_FETCH_FINISHED:
            return Immutable.List(action.payload.messages);

        case MESSAGE_SEND_FINISHED:
            return prevState.unshift(action.payload.message);

        case MESSAGE_DELETE_FINISHED:
            return prevState.filterNot(message => message.id === action.payload.messageId);

        case CHANNELS_FETCH_STARTED:
        case MESSAGES_FETCH_FAILED:
            return Immutable.List();

        default:
            return prevState;
    }
};
