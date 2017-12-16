export const validateResponse = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    }
    else {
        const errorMessage = response.statusText || `Something went wrong (ending up in ${response.status})`;

        const error = new Error(errorMessage);
        error.statusCode = response.status;

        throw error;
    }
};

export const validateDelete = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    else {
        const errorMessage = response.statusText || `Something went wrong (ending up in ${response.status})`;

        const error = new Error(errorMessage);
        error.statusCode = response.status;

        throw error;
    }
};