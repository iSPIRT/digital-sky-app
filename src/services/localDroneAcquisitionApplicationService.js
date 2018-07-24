import { handleResponseService } from "./handleResponseService";

export const localDroneAcquisitionApplicationService = {
  create,
  edit
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
    "https://localhost:9443/api/applicationForm/localDroneAcquisition",
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
    "https://localhost:9443/api/applicationForm/localDroneAcquisition/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
