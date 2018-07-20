export const localDroneAcquisitionApplicationService = {
  create,
  edit
};

function create(localDroneAcquisitionForm) {
  var accessToken = localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken
    },
    body: JSON.stringify(localDroneAcquisitionForm)
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/localDroneAcquisition",
    requestOptions
  ).then(handleResponse);
}

function edit(localDroneAcquisitionForm) {
  var accessToken = localStorage.getItem("accessToken");
  var applicationId = localDroneAcquisitionForm.id;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken
    },
    body: JSON.stringify(localDroneAcquisitionForm)
  };

  return fetch(
    "https://localhost:9443/api/applicationForm/localDroneAcquisition/" +
      applicationId,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const errors = (data && data.errors) || [data.toString()];
      return Promise.reject(data.message);
    }
    return data;
  });
}
