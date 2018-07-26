import { UINApplicationService } from "../services/UINApplicationService";
import { formStepAddAction } from "./applicationFormStepActions";

export const SAVE_UIN_APPLICATION_REQUEST = "SAVE_UIN_APPLICATION_REQUEST";
export const SAVE_UIN_APPLICATION_REQUEST_SUCCESS =
  "SAVE_UIN_APPLICATION_REQUEST_SUCCESS";
export const SAVE_UIN_APPLICATION_REQUEST_FAILURE =
  "SAVE_UIN_APPLICATION_REQUEST_FAILURE";

export const createUINApplicationAction = UINApplication => {
  return dispatch => {
    dispatch(request());
    UINApplicationService.create(UINApplication).then(
      createdApplication => {
        dispatch(success(createdApplication));
        dispatch(formStepAddAction());
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
    UINApplicationService.edit(UINApplication, applicationId).then(
      editedApplication => {
        dispatch(success(editedApplication));
        dispatch(formStepAddAction());
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
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
