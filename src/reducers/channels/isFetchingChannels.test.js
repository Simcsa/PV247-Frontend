import { isFetchingChannels } from "./isFetchingChannels";
import { CHANNELS_FETCH_FAILED, CHANNELS_FETCH_FINISHED, CHANNELS_FETCH_STARTED } from "../../constants/actionTypes";

describe('isFetchingChannels', () => {
    it('should handle starting fetching channels', () => {
        expect(isFetchingChannels(undefined, {type: CHANNELS_FETCH_STARTED})).toEqual(true)
    });
    it('should handle when channel fetching fails', () => {
        expect(isFetchingChannels(undefined, {type: CHANNELS_FETCH_FAILED})).toEqual(false)
    });
    it('should handle when channel fetching finishes', () => {
        expect(isFetchingChannels(undefined, {type: CHANNELS_FETCH_FINISHED})).toEqual(false)
    })
});