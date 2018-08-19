import { handleResponseService } from "./handleResponseService";
import applicationProperties from "../helpers/applicationPropertiesHelper";

export const droneService = {
  create,
  edit,
  load,
  loadOccurrenceReports,
  saveOccurrenceReport
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

function loadOccurrenceReports(droneId){
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch(apiRoot + "/occurrenceReport/drone/" + droneId+"/list", requestOptions).then(
    handleResponse
  );
}

function saveOccurrenceReport(occurrenceReport) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: { Authorization: authToken , "Content-Type": "application/json" },
    body: JSON.stringify(occurrenceReport)
  };
  return fetch(apiRoot + "/occurrenceReport", requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const errors = (data && data.errors) || [data.toString()];
      return Promise.reject(errors);
    }
    return data;
  });
}