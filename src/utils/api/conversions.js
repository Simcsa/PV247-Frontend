import * as Immutable from 'immutable';

export const convertFromServerDetails = (serverDetails) => ({
    ...JSON.parse(serverDetails.customData || '{}'),
    email: serverDetails.email,
});

export const convertToServerDetails = (details) => JSON.stringify({
    ...details,
});

export const convertChannelsFromServerDetails = (serverDetails) => (
    serverDetails.channels.map((channel) => convertChannel(channel))
);

export const convertChannel = (channel) => ({
    ...JSON.parse(channel.customData || '{}'),
    name: channel.name,
    id: channel.id,
});
