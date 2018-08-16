import { handleResponseService } from "./handleResponseService";
import applicationProperties from "../helpers/applicationPropertiesHelper";

export const metaDataService = {
  loadDroneTypes
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
