import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import { fetchChannels } from "./fetchChannels";
import { CHANNELS_FETCH_FINISHED, CHANNELS_FETCH_STARTED } from "../../constants/actionTypes";
import { API_CHANNELS_URI } from "../../constants/api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchChannels', () => {
    it('creates success when fetching channels has been done', () => {
        const channels = [
            {
                id: 'id',
                name: 'channelName'
            }
        ];

        fetchMock
            .getOnce(API_CHANNELS_URI, { body: { channels }, headers: { 'content-type': 'application/json' } });

        const expectedActions = [
            { type: CHANNELS_FETCH_STARTED },
            { type: CHANNELS_FETCH_FINISHED, payload: { channels } }
        ];
        const store = mockStore({ shared: {token: 'authtoken'}});

        return store.dispatch(fetchChannels()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});