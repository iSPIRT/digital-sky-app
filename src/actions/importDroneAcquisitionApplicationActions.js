import { droneAcquisitionApplicationService } from "../services/droneAcquisitionApplicationService";
import { formStepAddAction } from "./applicationFormStepActions";

export const SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST =
  "SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST";
export const SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS =
  "SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS";
export const SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE =
  "SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE";

export const createImportDroneAcquisitionApplicationAction = applicationForm => {
  return dispatch => {
    dispatch(request());
    droneAcquisitionApplicationService.create(applicationForm).then(
      createdForm => {
        dispatch(success(createdForm));
        dispatch(formStepAddAction());
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
  function request() {
    return { type: SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST };
  }
  function success(createdForm) {
    return {
      type: SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS,
      payload: createdForm
    };
  }
  function failure(errors) {
    return {
      type: SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE,
      payload: errors
    };
  }
};

export const editImportDroneAcquisitionApplicationAction = (
  applicationFormData,
  applicationId
) => {
  return dispatch => {
    dispatch(request());
    droneAcquisitionApplicationService
      .edit(applicationFormData, applicationId)
      .then(
        editedForm => {
          dispatch(success(editedForm));
          dispatch(formStepAddAction());
        },
        errors => {
          dispatch(failure(errors));
        }
      );
  };
  function request() {
    return { type: SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST };
  }
  function success(editedForm) {
    return {
      type: SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS,
      payload: editedForm
    };
  }
  function failure(errors) {
    return {
      type: SAVE_IMPORTDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE,
      payload: errors
    };
  }
};
