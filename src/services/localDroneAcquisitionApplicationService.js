export const localDroneAcqusitionApplicationService = {
  create
};

function create(localDroneAcquisitionForm) {
  var accessToken = localStorage.getItem("accessToken");
  // var formData  = new FormData();
  //formData.append("acquisitionForm", JSON.stringify(localDroneAcquisitionForm));
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
