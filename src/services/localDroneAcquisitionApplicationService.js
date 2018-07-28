import { handleResponseService } from "./handleResponseService";
import applicationProperties from '../helpers/applicationPropertiesHelper'

export const localDroneAcquisitionApplicationService = {
  create,
  edit,
  load
};

function create(localDroneAcquisitionForm) {
  const apiRoot = applicationProperties().apiRoot;
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
    apiRoot+"/applicationForm/localDroneAcquisitionApplication",
    requestOptions
  ).then(handleResponseService.handleResponse);
}

function edit(localDroneAcquisitionFormData, applicationId) {
  const apiRoot = applicationProperties().apiRoot;
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: localDroneAcquisitionFormData
  };

  return fetch(
    apiRoot+"/applicationForm/localDroneAcquisitionApplication/" +
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
    apiRoot+"/applicationForm/localDroneAcquisitionApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
