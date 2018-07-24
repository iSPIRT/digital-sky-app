import { handleResponseService } from "./handleResponseService";

export const droneAcquisitionApplicationService = {
  create,
  edit
};

function create(droneAcquisitionForm) {
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken
    },
    body: droneAcquisitionForm
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/importedDroneAcquisition",
    requestOptions
  ).then(handleResponseService.handleResponse);
}

function edit(droneAcquisitionFormData, applicationId) {
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: droneAcquisitionFormData
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/importedDroneAcquisition/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
