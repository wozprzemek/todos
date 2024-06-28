const API_URL = 'http://127.0.0.1:3000'

export const request = {
    get: async (path) => {
        const response = await fetch(`${API_URL}${path}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        return response.json();
    },
    post: async (path, body) => {
        return await fetch(`${API_URL}${path}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    },
    patch: async (path, body) => {
        return await fetch(`${API_URL}${path}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    },
    delete: async (path) => {
        return await fetch(`${API_URL}${path}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    },
}