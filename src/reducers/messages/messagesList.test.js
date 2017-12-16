import * as Immutable from 'immutable';
import { messagesList } from "./messagesList";
import {
    MESSAGE_DELETE_FINISHED,
    MESSAGE_SEND_FINISHED, MESSAGE_VOTE,
    MESSAGES_FETCH_FAILED,
    MESSAGES_FETCH_FINISHED
} from "../../constants/actionTypes";

const message1 = {
    id: '1',
    name: 'message1',
    upvoteCount: 0,
};

const message2 = {
    id: '2',
    name: 'message2',
    upvoteCount: 1,
};


describe('messagesList', () => {
    it('should handle new message creation', () => {

        const messages = [
            message2,
            message1,
        ];

        const action = {
            type: MESSAGE_SEND_FINISHED,
            payload: {
                message: message2
            }
        };

        expect(messagesList(Immutable.List([message1]), action)).toEqual(Immutable.List(messages))
    });
    it('should handle deleting message', () => {

        const messages = [
            message1,
            message2,
        ];

        const action = {
            type: MESSAGE_DELETE_FINISHED,
            payload: {
                messageId: message1.id
            }
        };

        expect(messagesList(Immutable.List(messages), action)).toEqual(Immutable.List([message2]))
    });
    it('should handle when message fetching finishes', () => {
        const messages = [
            message1
        ];
        const action = {
            type: MESSAGES_FETCH_FINISHED,
            payload: {
                messages
            }
        };

        expect(messagesList(undefined, action)).toEqual(Immutable.List(messages))
    });
    it('should handle when message fetching fails', () => {
        expect(messagesList(undefined, {type: MESSAGES_FETCH_FAILED})).toEqual(Immutable.List())
    });
    it('should handle voting message', () => {

        const messages = [
            message1,
            message2,
        ];

        const message = {
            ...message1,
            upvoteCount: message1.upvoteCount + 1,
        };

        const newMessages = [
            message,
            message2,
        ];

        const action = {
            type: MESSAGE_VOTE,
            payload: {
                message
            }
        };

        expect(messagesList(Immutable.List(messages), action)).toEqual(Immutable.List(newMessages))
    });
});