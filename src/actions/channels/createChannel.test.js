import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import {
    CHANNEL_CREATE_FINISHED, CHANNEL_CREATE_STARTED
} from "../../constants/actionTypes";
import { API_CHANNELS_URI } from "../../constants/api";
import { createChannel } from "./createChannel";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('createChannel', () => {
    it('creates success when creating channel has been done', () => {
        const channels = [
            {
                id: 'id',
                name: 'channelName'
            }
        ];

        fetchMock
            .patchOnce(API_CHANNELS_URI, { body: { channels }, headers: { 'content-type': 'application/json' } });

        const expectedActions = [
            { type: CHANNEL_CREATE_STARTED },
            { type: CHANNEL_CREATE_FINISHED, payload: { channels } }
        ];
        const store = mockStore({ shared: {token: 'authtoken', userEmail: 'example@email.com'}});

        return store.dispatch(createChannel('channelName')).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});