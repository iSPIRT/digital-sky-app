import { handleResponseService } from "./handleResponseService";
import applicationProperties from "../helpers/applicationPropertiesHelper";

export const metaDataService = {
  loadDroneTypes,
  loadOperatorDeviceIds
};

function loadDroneTypes() {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  return fetch(apiRoot + "/droneType/getAll", requestOptions).then(
    handleResponseService.handleResponse
  );
}

function loadOperatorDeviceIds() {
  const apiRoot = applicationProperties().apiRoot;
  const individualOperatorProfileId = localStorage.getItem(
    "individualOperatorProfileId"
  );
  const organizationOperatorProfileId = localStorage.getItem(
    "organizationOperatorProfileId"
  );
  const operatorCode =
    individualOperatorProfileId > 0
      ? individualOperatorProfileId
      : organizationOperatorProfileId;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  return fetch(
    apiRoot + "/droneDevice/list?operatorCode=" + operatorCode,
    requestOptions
  ).then(handleResponseService.handleResponse);
}
