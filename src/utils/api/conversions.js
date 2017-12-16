export const convertProfileFromServerDetails = (serverDetails) => ({
    ...JSON.parse(serverDetails.customData || '{}'),
    email: serverDetails.email,
});

export const convertProfileToServerDetails = (details) => JSON.stringify({
    ...details,
    email: undefined
});

export const convertChannelsFromServerDetails = (serverDetails) => (
    serverDetails.channels.map((channel) => convertChannel(channel))
);

export const convertChannel = (channel) => ({
    ...JSON.parse(channel.customData || '{}'),
    name: channel.name,
    id: channel.id,
});

export const convertMessagesFromServerDetails = (serverDetails) => (
    serverDetails.map((message) => convertMessageFromServer(message))
);

export const convertMessageFromServer = (message) => ({
    ...JSON.parse(message.customData || '{}'),
    id: message.id,
    value: message.value,
    createdAt: message.createdAt,
    createdBy: message.createdBy,
});


export const convertUsersFromServerDetails = (serverDetails) => (
    serverDetails.map((user) => convertProfileFromServerDetails(user))
);

