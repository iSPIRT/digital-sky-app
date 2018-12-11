import { INDIVIDUAL_OPERATOR_TYPE } from "../constants/operatorType";

import applicationProperties from "../helpers/applicationPropertiesHelper";

export const userService = {
  login,
  logout,
  register,
  sendResetPasswordLink,
  resetPassword,
  createPilotProfile,
  updatePilotProfile,
  loadPilotProfile,
  createOperatorProfile,
  updateOperatorProfile,
  loadOperatorProfile,
  createManufacturerProfile,
  updateManufacturerProfile,
  loadManufacturerProfile,
  loadApplications,
  verifyAccount,
  loadUserDetails,
  checkAdmin
};

function register(user) {
  const apiRoot = applicationProperties().apiRoot;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  };

  return fetch(apiRoot + "/user", requestOptions).then(handleResponse);
}

function login(credentials) {
  const apiRoot = applicationProperties().apiRoot;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  };

  return fetch(apiRoot + "/auth/token", requestOptions)
    .then(handleResponse)
    .then(loginUser);
}

function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("pilotProfileId");
  localStorage.removeItem("individualOperatorProfileId");
  localStorage.removeItem("organizationOperatorProfileId");
  localStorage.removeItem("manufacturerProfileId");
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
  localStorage.removeItem("isAdmin");
}

function sendResetPasswordLink(email) {
  const apiRoot = applicationProperties().apiRoot;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(email)
  };

  return fetch(apiRoot + "/user/resetPasswordLink", requestOptions).then(
    handleResponse
  );
}

function resetPassword(payload) {
  const apiRoot = applicationProperties().apiRoot;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  };

  return fetch(apiRoot + "/user/resetPassword", requestOptions)
    .then(handleResponse)
    .then(loginUser);
}

function verifyAccount(token) {
  const apiRoot = applicationProperties().apiRoot;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(token)
  };

  return fetch(apiRoot + "/user/verify", requestOptions)
    .then(handleResponse)
    .then(loginUser);
}

function createPilotProfile(pilotProfileFormData) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: { Authorization: authToken },
    body: pilotProfileFormData
  };

  return fetch(apiRoot + "/pilot", requestOptions)
    .then(handleResponse)
    .then(response => {
      if (response.id) {
        localStorage.setItem("pilotProfileId", response.id);
      }
      return response;
    });
}

function updatePilotProfile(pilotProfileId, pilotProfileFormData) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PUT",
    headers: { Authorization: authToken },
    body: pilotProfileFormData
  };
  return fetch(apiRoot + "/pilot/" + pilotProfileId, requestOptions).then(
    handleResponse
  );
}

function loadPilotProfile(pilotProfileId) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  return fetch(apiRoot + "/pilot/" + pilotProfileId, requestOptions).then(
    handleResponse
  );
}

function createOperatorProfile(profile_type, operatorProfile) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: authToken },
    body: JSON.stringify(operatorProfile)
  };

  const profileRelativePath =
    profile_type === INDIVIDUAL_OPERATOR_TYPE ? "operator" : "orgOperator";

  return fetch(apiRoot + "/" + profileRelativePath, requestOptions)
    .then(handleResponse)
    .then(response => {
      if (response.id) {
        if (profile_type === INDIVIDUAL_OPERATOR_TYPE) {
          localStorage.setItem("individualOperatorProfileId", response.id);
        } else {
          localStorage.setItem("organizationOperatorProfileId", response.id);
        }
      }
    });
}

function updateOperatorProfile(
  profile_type,
  operatorProfileId,
  operatorProfile
) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: authToken },
    body: JSON.stringify(operatorProfile)
  };

  const profileRelativePath =
    profile_type === INDIVIDUAL_OPERATOR_TYPE ? "operator" : "orgOperator";

  return fetch(
    apiRoot + "/" + profileRelativePath + "/" + operatorProfileId,
    requestOptions
  ).then(handleResponse);
}

function loadOperatorProfile(profile_type, operatorProfileId) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  const profileRelativePath =
    profile_type === INDIVIDUAL_OPERATOR_TYPE ? "operator" : "orgOperator";

  return fetch(
    apiRoot + "/" + profileRelativePath + "/" + operatorProfileId,
    requestOptions
  ).then(handleResponse);
}

function createManufacturerProfile(manufacturerProfileFormData) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "POST",
    headers: { Authorization: authToken },
    body: manufacturerProfileFormData
  };

  return fetch(apiRoot + "/manufacturer", requestOptions)
    .then(handleResponse)
    .then(response => {
      if (response.id) {
        localStorage.setItem("manufacturerProfileId", response.id);
      }
      return response;
    });
}

function updateManufacturerProfile(
  manufacturerProfileId,
  manufacturerProfileFormData
) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "PUT",
    headers: { Authorization: authToken },
    body: manufacturerProfileFormData
  };

  return fetch(
    apiRoot + "/manufacturer/" + manufacturerProfileId,
    requestOptions
  ).then(handleResponse);
}

function loadManufacturerProfile(manufacturerProfileId) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  return fetch(
    apiRoot + "/manufacturer/" + manufacturerProfileId,
    requestOptions
  ).then(handleResponse);
}

function loadApplications() {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  return fetch(apiRoot + "/user/applications", requestOptions).then(
    handleResponse
  );
}

function loadUserDetails(id) {
  const apiRoot = applicationProperties().apiRoot;
  const authToken = "Bearer " + localStorage.getItem("accessToken");
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: authToken }
  };

  return fetch(apiRoot + "/user/" + id, requestOptions).then(handleResponse);
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

function loginUser(token) {
  if (token.accessToken) {
    localStorage.setItem("accessToken", token.accessToken);
    localStorage.setItem("userId", token.id);
    localStorage.setItem("isAdmin", token.isAdmin);
    localStorage.setItem("pilotProfileId", token.pilotProfileId);
    localStorage.setItem("manufacturerProfileId", token.manufacturerProfileId);
    localStorage.setItem("userName", token.username);
    localStorage.setItem(
      "individualOperatorProfileId",
      token.individualOperatorProfileId
    );
    localStorage.setItem(
      "organizationOperatorProfileId",
      token.organizationOperatorProfileId
    );
  }
}

function checkAdmin(token) {
  if (token) {
    const apiRoot = applicationProperties().apiRoot;
    const authToken = "Bearer " + localStorage.getItem("accessToken");
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: authToken }
    };
    return fetch(apiRoot + "/auth/verifyAdmin", requestOptions).then(
      handleResponse
    );
  }
}
