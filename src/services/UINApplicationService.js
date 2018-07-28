import { handleResponseService } from "./handleResponseService";

export const uinApplicationService = {
  create,
  edit,
  load
};

function create(application) {
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: application
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/uinApplication",
    requestOptions
  ).then(handleResponseService.handleResponse);
}

function edit(application, applicationId) {
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: application
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/uinApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}

function load(applicationId) {
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/uinApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
