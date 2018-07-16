import { localDroneAcquisitionApplicationService } from "../services/localDroneAcquisitionApplicationService";

export const CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST =
  "CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST";
export const CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS =
  "CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS";
export const CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE =
  "CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE";

export const createLocalDroneAcquisitionApplicationAction = localDroneAcquisitionApplication => {
  return dispatch => {
    dispatch(request());
    localDroneAcquisitionApplicationService
      .create(localDroneAcquisitionApplication)
      .then(
        createdForm => {
          dispatch(success(createdForm));
        },
        errors => {
          dispatch(failure(errors));
        }
      );
  };

  function request() {
    return { type: CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST };
  }
  function success(createdForm) {
    return {
      type: CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_SUCCESS,
      payload: createdForm
    };
  }
  function failure(errors) {
    return {
      type: CREATE_LOCALDRONEACQUISITIONAPPLICATION_REQUEST_FAILURE,
      payload: errors
    };
  }
};
