import { localDroneAcquisitionApplicationService } from "../services/localDroneAcquisitionApplicationService";
import { formStepAddAction } from "./applicationFormStepActions";

export const SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST =
  "SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST";
export const SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_SUCCESS =
  "SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_SUCCESS";
export const SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_FAILURE =
  "SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_FAILURE";
export const LOCALDRONEACQUISITION_APPLICATION_FORM_LOADED =
  "LOCALDRONEACQUISITION_APPLICATION_FORM_LOADED";
export const LOAD_LOCALDRONEACQUISITION_APPLICATION_SUCCESS =
  "LOAD_LOCALDRONEACQUISITION_APPLICATION_SUCCESS";
export const LOAD_LOCALDRONEACQUISITION_APPLICATION_FAILURE =
  "LOAD_LOCALDRONEACQUISITION_APPLICATION_FAILURE";

export const createLocalDroneAcquisitionApplicationAction = localDroneAcquisitionApplication => {
  return dispatch => {
    dispatch(request());
    localDroneAcquisitionApplicationService
      .create(localDroneAcquisitionApplication)
      .then(
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

export const editLocalDroneAcquisitionApplicationAction = (
  localDroneAcquisitionApplicationFormData,
  applicationId
) => {
  return dispatch => {
    dispatch(request());
    localDroneAcquisitionApplicationService
      .edit(localDroneAcquisitionApplicationFormData, applicationId)
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
};

export const loadLocalDroneAcquisitionApplicationAction = applicationId => {
  return dispatch => {
    localDroneAcquisitionApplicationService.load(applicationId).then(
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
      type: LOAD_LOCALDRONEACQUISITION_APPLICATION_SUCCESS,
      payload: application
    };
  }
  function failureLoading(errors) {
    return {
      type: LOAD_LOCALDRONEACQUISITION_APPLICATION_FAILURE,
      payload: errors
    };
  }
};

export const applicationFormLoadedAction = () => {
  return { type: LOCALDRONEACQUISITION_APPLICATION_FORM_LOADED };
};

function request() {
  return { type: SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST };
}
function success(editedForm) {
  return {
    type: SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_SUCCESS,
    payload: editedForm
  };
}
function failure(errors) {
  return {
    type: SAVE_LOCALDRONEACQUISITION_APPLICATION_REQUEST_FAILURE,
    payload: errors
  };
}
