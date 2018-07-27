import { handleResponseService } from "./handleResponseService";

export const UINApplicationService = {
  create,
  edit
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
