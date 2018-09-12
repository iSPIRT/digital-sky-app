import { metaDataService } from "../services/metaDataService";

export const LOAD_METADATA_REQUEST = "LOAD_METADATA_REQUEST";
export const LOAD_DRONE_TYPES_SUCCESS = "LOAD_DRONE_TYPES_SUCCESS";
export const LOAD_OPERATOR_DEVICEID_SUCCESS = "LOAD_OPERATOR_DEVICEID_SUCCESS";
export const LOAD_METADATA_FAILURE = "LOAD_METADATA_FAILURE";

export const loadMetaDataAction = () => {
  return dispatch => {
    dispatch(request());
    metaDataService
      .loadDroneTypes()
      .then(
        droneTypes => {
          dispatch(loadDroneTypeSuccess(droneTypes));
        },
        errors => {
          dispatch(failure(errors));
        }
      )
      .then(
        metaDataService.loadOperatorDeviceIds().then(
          operatorDeviceIds => {
            dispatch(loadOperatorDeviceIdSuccess(operatorDeviceIds));
          },
          errors => {
            dispatch(failure(errors));
          }
        )
      );
  };
};

function request() {
  return { type: LOAD_METADATA_REQUEST };
}
function loadDroneTypeSuccess(droneTypes) {
  return { type: LOAD_DRONE_TYPES_SUCCESS, droneTypes };
}
function loadOperatorDeviceIdSuccess(operatorDeviceIds) {
  return { type: LOAD_OPERATOR_DEVICEID_SUCCESS, operatorDeviceIds };
}
function failure(errors) {
  return { type: LOAD_METADATA_FAILURE, errors };
}
