import * as Immutable from 'immutable';

export const convertFromServerDetails = (serverDetails) => ({
    ...JSON.parse(serverDetails.customData || '{}'),
    email: serverDetails.email,
});

export const convertToServerDetails = (details) => JSON.stringify({
    ...details,
});

export const convertChannelsFromServerDetails = (serverDetails) => ({
    channels: Immutable.fromJS(serverDetails.channels).toList(),
});
