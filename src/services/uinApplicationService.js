import { handleResponseService } from "./handleResponseService";
import applicationProperties from '../helpers/applicationPropertiesHelper'

export const uinApplicationService = {
  create,
  edit,
  load
};

function create(application) {
  const apiRoot = applicationProperties().apiRoot;
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: application
  };

  return fetch(
    apiRoot+"/applicationForm/uinApplication",
    requestOptions
  ).then(handleResponseService.handleResponse);
}

function edit(application, applicationId) {
  const apiRoot = applicationProperties().apiRoot;
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: application
  };

  return fetch(
    apiRoot+"/applicationForm/uinApplication/" +
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
    apiRoot+"/applicationForm/uinApplication/" +
      applicationId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
