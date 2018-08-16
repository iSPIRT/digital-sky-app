import { uinApplicationService } from "../services/uinApplicationService";

export const SAVE_UIN_APPLICATION_REQUEST = "SAVE_UIN_APPLICATION_REQUEST";
export const SAVE_UIN_APPLICATION_REQUEST_SUCCESS =
  "SAVE_UIN_APPLICATION_REQUEST_SUCCESS";
export const SAVE_UIN_APPLICATION_REQUEST_FAILURE =
  "SAVE_UIN_APPLICATION_REQUEST_FAILURE";
export const UIN_APPLICATION_FORM_LOADED = "UIN_APPLICATION_FORM_LOADED";
export const LOAD_UIN_APPLICATION_SUCCESS = "LOAD_UIN_APPLICATION_SUCCESS";
export const LOAD_UIN_APPLICATION_FAILURE = "LOAD_UIN_APPLICATION_FAILURE";

export const createUINApplicationAction = UINApplication => {
  return dispatch => {
    dispatch(request());
    uinApplicationService.create(UINApplication).then(
      createdApplication => {
        dispatch(success(createdApplication));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

export const editUINApplicationAction = (UINApplication, applicationId) => {
  return dispatch => {
    dispatch(request());
    uinApplicationService.edit(UINApplication, applicationId).then(
      editedApplication => {
        dispatch(success(editedApplication));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

export const loadUINApplicationAction = applicationId => {
  return dispatch => {
    uinApplicationService.load(applicationId).then(
      loadedApplication => {
        dispatch(successLoading(loadedApplication));
      },
      errors => {
        dispatch(failureLoading(errors));
      }
    );
  };
  function successLoading(application) {
    return {
      type: LOAD_UIN_APPLICATION_SUCCESS,
      payload: application
    };
  }
  function failureLoading(errors) {
    return {
      type: LOAD_UIN_APPLICATION_FAILURE,
      payload: errors
    };
  }
};

export const applicationFormLoadedAction = () => {
  return { type: UIN_APPLICATION_FORM_LOADED };
};

function request() {
  return { type: SAVE_UIN_APPLICATION_REQUEST };
}
function success(editedForm) {
  return {
    type: SAVE_UIN_APPLICATION_REQUEST_SUCCESS,
    payload: editedForm
  };
}
function failure(errors) {
  return {
    type: SAVE_UIN_APPLICATION_REQUEST_FAILURE,
    payload: errors
  };
}
