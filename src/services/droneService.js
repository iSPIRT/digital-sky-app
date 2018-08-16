import { handleResponseService } from "./handleResponseService";
import applicationProperties from "../helpers/applicationPropertiesHelper";

export const droneService = {
  create,
  edit,
  load
};

function create(formData) {
  const apiRoot = applicationProperties().apiRoot;
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: formData
  };

  return fetch(apiRoot + "/droneType", requestOptions).then(
    handleResponseService.handleResponse
  );
}

function edit(formData, id) {
  const apiRoot = applicationProperties().apiRoot;
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + accessToken
    },
    body: formData
  };

  return fetch(apiRoot + "/droneType/" + id, requestOptions).then(
    handleResponseService.handleResponse
  );
}

function load(id) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch(apiRoot + "/droneType/" + id, requestOptions).then(
    handleResponseService.handleResponse
  );
}
