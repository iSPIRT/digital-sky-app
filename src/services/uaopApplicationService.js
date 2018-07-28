import applicationProperties from '../helpers/applicationPropertiesHelper'

export const uaopApplicationService = {
  createApplication,
  updateApplication,
  loadApplication
};

function createApplication(applicationFormData) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: { Authorization: authToken },
    body: applicationFormData
  };

  return fetch(
    apiRoot+"/applicationForm/uaopApplication",
    requestOptions
  ).then(handleResponse);
}

function updateApplication(applicationId, applicationFormData) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: { Authorization: authToken },
    body: applicationFormData
  };

  return fetch(
    apiRoot+"/applicationForm/uaopApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponse);
}

function loadApplication(applicationId) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch(
    apiRoot+"/applicationForm/uaopApplication/" +
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
