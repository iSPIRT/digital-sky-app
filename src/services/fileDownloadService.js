import applicationProperties from '../helpers/applicationPropertiesHelper'

export const fileDownloadService = {
  download
};

function download(path) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch(apiRoot+"/" + path, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.blob();
}
