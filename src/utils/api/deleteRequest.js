import { validateDelete } from './validateResponse';

export const deleteRequest = (uri, token) =>
    fetch(
        uri,
        {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        .then(validateDelete);