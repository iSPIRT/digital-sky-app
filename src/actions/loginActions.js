import { userService } from "../services/userService";

export const LOGIN_FORM_LOADED = "LOGIN_FORM_LOADED";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const ADMIN_CHECK_SUCCESS = "ADMIN_CHECK_SUCCESS";
export const ADMIN_CHECK_FAILURE = "ADMIN_CHECK_FAILURE";

export const loginAction = credentials => {
  return dispatch => {
    dispatch(request());
    userService.login(credentials).then(
      data => {
        dispatch(success());
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: LOGIN_REQUEST };
  }
  function success() {
    return { type: LOGIN_SUCCESS };
  }
  function failure(errors) {
    return { type: LOGIN_FAILURE, errors };
  }
};

export const logoutAction = () => {
  userService.logout();
  return { type: LOGOUT };
};

export const loginFormLoaded = () => {
  return { type: LOGIN_FORM_LOADED };
};

export const checkAdminAction = token => {
  return dispatch => {
    userService.checkAdmin(token).then(
      data => {
        dispatch(successAdminCheck());
      },
      errors => {
        dispatch(failAdminCheck(errors));
      }
    );
  };
  function successAdminCheck() {
    return { type: ADMIN_CHECK_SUCCESS };
  }
  function failAdminCheck(errors) {
    return { type: ADMIN_CHECK_FAILURE, errors };
  }
};
