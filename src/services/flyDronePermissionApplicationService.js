import applicationProperties from "../helpers/applicationPropertiesHelper";

export const flyDronePermissionApplicationService = {
  createApplication,
  updateApplication,
  loadApplications
};

function createApplication(application) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: { Authorization: authToken, "Content-Type": "application/json" },
    body: JSON.stringify(application)
  };

  return fetch(
    apiRoot + "/applicationForm/flyDronePermissionApplication",
    requestOptions
  ).then(handleResponse);
}

function updateApplication(applicationId, application) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: { Authorization: authToken, "Content-Type": "application/json" },
    body: JSON.stringify(application)
  };

  return fetch(
    apiRoot + "/applicationForm/flyDronePermissionApplication/" + applicationId,
    requestOptions
  ).then(handleResponse);
}

function loadApplications(droneId) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch(
    apiRoot +
      "/applicationForm/flyDronePermissionApplication/list?droneId=" +
      droneId,
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
