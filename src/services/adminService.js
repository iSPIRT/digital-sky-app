
export const adminService = {
    loadApplications,
    approveApplication
};

function loadApplications(applicationType) {
    const authToken = ('Bearer ' +  localStorage.getItem('accessToken'));
    const requestOptions = {
        method: 'GET',
        headers: { Authorization: authToken }
    };

    return fetch("https://localhost:9443/api/applicationForm/"+applicationType+"/getAll", requestOptions).then(handleResponse);
}

function approveApplication(applicationType, applicationId, applicationApproval) {
    const authToken = ('Bearer ' +  localStorage.getItem('accessToken'));
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: authToken },
        body: JSON.stringify(applicationApproval)
    };
    const url = "https://localhost:9443/api/applicationForm/"+applicationType+"/approve/"+applicationId;
    return fetch(url, requestOptions).then(handleResponse);
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





