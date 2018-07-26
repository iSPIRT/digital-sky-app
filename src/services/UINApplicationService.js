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
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken
    },
    body: application
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/UINApplication",
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
    "https://localhost:9443/api/applicationForm/UINApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
