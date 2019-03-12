import applicationProperties from "../helpers/applicationPropertiesHelper";

export const adminService = {
  loadApplications,
  approveApplication,
  saveBlog,
  updateBlog,
  loadBlogList,
  loadAirspaceCategories,
  saveAirspaceCategory,
  updateAirspaceCategory
};

function loadApplications(applicationType) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };

  return fetch(
    apiRoot + "/applicationForm/" + applicationType + "/getAll",
    requestOptions
  ).then(handleResponse);
}

function approveApplication(
  applicationType,
  applicationId,
  applicationApproval
) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: authToken },
    body: JSON.stringify(applicationApproval)
  };
  const url =
    apiRoot +
    "/applicationForm/" +
    applicationType +
    "/approve/" +
    applicationId;
  return fetch(url, requestOptions).then(handleResponse);
}

function saveBlog(blog) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authToken },
    body: JSON.stringify(blog)
  };
  const url = apiRoot + "/blog";
  return fetch(url, requestOptions).then(handleResponse);
}

function updateBlog(id, blog) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: authToken },
    body: JSON.stringify(blog)
  };
  const url = apiRoot + "/blog/" + id;
  return fetch(url, requestOptions).then(handleResponse);
}

function loadBlogList() {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };
  const url = apiRoot + "/blog/list";
  return fetch(url, requestOptions).then(handleResponse);
}

function loadAirspaceCategories() {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { Authorization: authToken }
  };
  return fetch(apiRoot + "/airspaceCategory/list", requestOptions).then(
    handleResponse
  );
}

function saveAirspaceCategory(airspaceCategory) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  if (airspaceCategory.geoJson.type === "FeatureCollection") {
    airspaceCategory.geoJson.features.forEach((feature, index) => {
      airspaceCategory.geoJson.features[index] = checkAndAddDefaultAreaLength(
        feature
      );
    });
  } else {
    airspaceCategory.geoJson = checkAndAddDefaultAreaLength(
      airspaceCategory.geoJson
    );
  }
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authToken },
    body: JSON.stringify(airspaceCategory)
  };
  const url = apiRoot + "/airspaceCategory";
  return fetch(url, requestOptions).then(handleResponse);
}

function updateAirspaceCategory(id, airspaceCategory) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  if (airspaceCategory.geoJson.type === "FeatureCollection") {
    airspaceCategory.geoJson.features.forEach((feature, index) => {
      airspaceCategory.geoJson.features[index] = checkAndAddDefaultAreaLength(
        feature
      );
    });
  } else {
    airspaceCategory.geoJson = checkAndAddDefaultAreaLength(
      airspaceCategory.geoJson
    );
  }
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: authToken },
    body: JSON.stringify(airspaceCategory)
  };
  const url = apiRoot + "/airspaceCategory/" + id;
  return fetch(url, requestOptions).then(handleResponse);
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

function checkAndAddDefaultAreaLength(airspaceCategory) {
  if (
    airspaceCategory.properties != null &&
    airspaceCategory.properties != {}
  ) {
    if (!airspaceCategory.properties.SHAPE_Area)
      airspaceCategory.properties.SHAPE_Area = null;
    if (!airspaceCategory.properties.SHAPE_Length)
      airspaceCategory.properties.SHAPE_Length = null;
  }
  return airspaceCategory;
}
