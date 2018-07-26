export const uaopApplicationService = {
  createApplication,
  updateApplication,
  loadApplication
};

function createApplication(applicationFormData) {
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: { Authorization: authToken },
    body: applicationFormData
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/uaopApplication",
    requestOptions
  ).then(handleResponse);
}

function updateApplication(applicationId, applicationFormData) {
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: { Authorization: authToken },
    body: applicationFormData
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/uaopApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponse);
}

function loadApplication(applicationId) {
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/uaopApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponse);
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
