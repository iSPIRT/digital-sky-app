
export const userService = {
    login,
    logout,
    register,
    sendResetPasswordLink,
    resetPassword
};

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch("https://localhost:9443/api/user", requestOptions).then(handleResponse);
}

function login(credentials) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    };

    return fetch("https://localhost:9443/api/auth/token", requestOptions)
                .then(handleResponse)
                .then(token => {
                    if (token.accessToken) {
                      localStorage.setItem('accessToken', token.accessToken);
                    }
                });
}

function logout(){
    localStorage.removeItem('accessToken');
}

function sendResetPasswordLink(email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
    };

    return fetch("https://localhost:9443/api/user/resetPasswordLink", requestOptions).then(handleResponse);
}

function resetPassword(payload) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    return fetch("https://localhost:9443/api/user/resetPassword", requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const errors = (data && data.errors) || [data.toString()];
            return Promise.reject(errors);
        }
        return data;
    });
}