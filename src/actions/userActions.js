import { userService } from "../services/userService";

export const LOAD_USER_APPLICATIONS_REQUEST = "LOAD_USER_APPLICATIONS_REQUEST";
export const LOAD_USER_APPLICATIONS_SUCCESS = "LOAD_USER_APPLICATIONS_SUCCESS";
export const LOAD_USER_APPLICATIONS_FAILURE = "LOAD_USER_APPLICATIONS_FAILURE";

export const VERIFY_ACCOUNT_SUCCESS = "VERIFY_ACCOUNT_SUCCESS";
export const VERIFY_ACCOUNT_FAILURE = "VERIFY_ACCOUNT_FAILURE";

export const loadApplicationsAction = () => {
  return dispatch => {
    dispatch(request());
    userService.loadApplications().then(
      applications => {
        dispatch(success(applications));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: LOAD_USER_APPLICATIONS_REQUEST };
  }
  function success(applications) {
    return { type: LOAD_USER_APPLICATIONS_SUCCESS, applications };
  }
  function failure(errors) {
    return { type: LOAD_USER_APPLICATIONS_FAILURE, errors };
  }
};

export const verifyAccountAction = (token) => {
  return dispatch => {
    userService.verifyAccount(token).then(
      data => {
        dispatch(success());
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function success() {
    return { type: VERIFY_ACCOUNT_SUCCESS};
  }
  function failure(errors) {
    return { type: VERIFY_ACCOUNT_FAILURE, errors };
  }
};
