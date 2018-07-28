import { handleResponseService } from "./handleResponseService";

export const localDroneAcquisitionApplicationService = {
  create,
  edit,
  load
};

function create(localDroneAcquisitionForm) {
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken
    },
    body: localDroneAcquisitionForm
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/localDroneAcquisitionApplication",
    requestOptions
  ).then(handleResponseService.handleResponse);
}

function edit(localDroneAcquisitionFormData, applicationId) {
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: localDroneAcquisitionFormData
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/localDroneAcquisitionApplication/" +
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
    "https://localhost:9443/api/applicationForm/localDroneAcquisitionApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
