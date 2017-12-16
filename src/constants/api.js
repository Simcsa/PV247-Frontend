const API_URI = 'https://pv247messaging.azurewebsites.net/api';
export const API_APP_ID = '2e704ac5-8fdb-467c-b3b2-d58d39f2e4a6';

export const EXAMPLE_USER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJleGFtcGxlVXNlckBleGFtcGxlLmNvbSIsImp0aSI6IjE1ZDkwMTM2LTU2MTgtNDlkNi05ZDk1LTMzMDQ1OTA3YjZiNCIsImlhdCI6MTUxMzI2MTM5NiwibmJmIjoxNTEzMjYxMzk2LCJleHAiOjE1MTMzNDc3OTYsImlzcyI6IlBWMjQ3IEFQSSIsImF1ZCI6IlBWMjQ3IFN0dWRlbnRzIn0.nxEWpeYG-_dWxkCUT5Aj6q1qz4g7cQYtKzFdEib8Jyc';

export const API_AUTH_URI = `${API_URI}/auth`;

export const API_CHANNELS_URI = `${API_URI}/app/${API_APP_ID}`;

export const API_CREATE_USER_URI = `${API_URI}/${API_APP_ID}/user`;
export const API_USER_URI = (userEmail) => `${API_URI}/${API_APP_ID}/user/${userEmail}`;

export const API_FILE_URI = `${API_URI}/file`;
export const API_GET_FILE_DOWNLOAD_LINK_URI = (fileId) => `${API_FILE_URI}/${fileId}/download-link`;

export const API_MESSAGES_URI = (channelId) => `${API_URI}/app/${API_APP_ID}/channel/${channelId}/message`;
export const API_UPDATE_MESSAGE_URI = (channelId, messageId) => `${API_URI}/app/${API_APP_ID}/channel/${channelId}/message/${messageId}`;