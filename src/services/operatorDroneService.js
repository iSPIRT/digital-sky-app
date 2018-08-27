import { handleResponseService } from "./handleResponseService";
import applicationProperties from "../helpers/applicationPropertiesHelper";

export const operatorDroneService = {
  loadDrones,
  loadDrone
};

function loadDrones() {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  return fetch(apiRoot + "/operatorDrone", requestOptions).then(
    handleResponseService.handleResponse
  );
}

function loadDrone(operatorDroneId) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  return fetch(
    apiRoot + "/operatorDrone/" + operatorDroneId,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
