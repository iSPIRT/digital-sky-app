import { importDroneApplicationService } from "../services/importDroneApplicationService";
import { formStepAddAction } from "./applicationFormStepActions";

export const SAVE_IMPORTDRONE_APPLICATION_REQUEST =
  "SAVE_IMPORTDRONE_APPLICATION_REQUEST";
export const SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS =
  "SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS";
export const SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE =
  "SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE";

export const createImportDroneApplicationAction = applicationForm => {
  return dispatch => {
    dispatch(request());
    importDroneApplicationService.create(applicationForm).then(
      createdForm => {
        dispatch(success(createdForm));
        dispatch(formStepAddAction());
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

export const editImportDroneApplicationAction = (
  applicationFormData,
  applicationId
) => {
  return dispatch => {
    dispatch(request());
    importDroneApplicationService.edit(applicationFormData, applicationId).then(
      editedForm => {
        dispatch(success(editedForm));
        dispatch(formStepAddAction());
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

function request() {
  return { type: SAVE_IMPORTDRONE_APPLICATION_REQUEST };
}
function success(editedForm) {
  return {
    type: SAVE_IMPORTDRONE_APPLICATION_REQUEST_SUCCESS,
    payload: editedForm
  };
}
function failure(errors) {
  return {
    type: SAVE_IMPORTDRONE_APPLICATION_REQUEST_FAILURE,
    payload: errors
  };
}
