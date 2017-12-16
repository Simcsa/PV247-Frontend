import * as Immutable from 'immutable';
import {
    MESSAGES_FETCH_FINISHED,
    MESSAGES_FETCH_FAILED,
    MESSAGE_SEND_FINISHED,
    MESSAGE_DELETE_FINISHED,
    MESSAGE_VOTE,
    MESSAGES_FETCH_STARTED,
} from '../../constants/actionTypes';

export const messagesList = (prevState = Immutable.List(), action) => {
    switch (action.type) {
        case MESSAGES_FETCH_FINISHED:
            return Immutable.List(action.payload.messages);

        case MESSAGE_SEND_FINISHED:
            return prevState.unshift(action.payload.message);

        case MESSAGE_DELETE_FINISHED:
            return prevState.filterNot(message => message.id === action.payload.messageId);

        case MESSAGE_VOTE:
            const voteMessageIndex = prevState.findIndex((message) => action.payload.message.id === message.id);
            return prevState.update(voteMessageIndex, () => action.payload.message);

        case MESSAGES_FETCH_STARTED:
        case MESSAGES_FETCH_FAILED:
            return Immutable.List();

        default:
            return prevState;
    }
};
