import { localDroneAcquisitionApplicationService } from "../services/localDroneAcquisitionApplicationService";
import { formStepAddAction } from "./applicationFormStepActions";

export const EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST =
  "EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST";
export const EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS =
  "EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS";
export const EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE =
  "EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE";

export const editLocalDroneAcquisitionApplicationAction = localDroneAcquisitionApplication => {
  return dispatch => {
    dispatch(request());
    localDroneAcquisitionApplicationService
      .edit(localDroneAcquisitionApplication)
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
    return { type: EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST };
  }
  function success(editedForm) {
    return {
      type: EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS,
      payload: editedForm
    };
  }
  function failure(errors) {
    return {
      type: EDIT_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE,
      payload: errors
    };
  }
};
