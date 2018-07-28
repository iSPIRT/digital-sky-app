import { handleResponseService } from "./handleResponseService";
import applicationProperties from '../helpers/applicationPropertiesHelper'

export const importDroneApplicationService = {
  create,
  edit,
  load
};

function create(droneAcquisitionForm) {
  const apiRoot = applicationProperties().apiRoot;
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
    apiRoot+"/applicationForm/importDroneApplication",
    requestOptions
  ).then(handleResponseService.handleResponse);
}

function edit(droneAcquisitionFormData, applicationId) {
  const apiRoot = applicationProperties().apiRoot;
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: droneAcquisitionFormData
  };

  return fetch(
    apiRoot+"/applicationForm/importDroneApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}

function load(applicationId) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };
  return fetch(
    apiRoot+"/applicationForm/importDroneApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
