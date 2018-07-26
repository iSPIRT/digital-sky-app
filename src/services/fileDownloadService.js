export const fileDownloadService = {
  download
};

function download(path) {
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch("https://localhost:9443/api/" + path, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.blob();
}
