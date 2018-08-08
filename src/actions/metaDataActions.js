import { metaDataService } from "../services/metaDataService";

export const LOAD_METADATA_REQUEST = "LOAD_METADATA_REQUEST";
export const LOAD_METADATA_SUCCESS = "LOAD_METADATA_SUCCESS";
export const LOAD_METADATA_FAILURE = "LOAD_METADATA_FAILURE";

export const loadMetaDataAction = () => {
  return dispatch => {
    dispatch(request());
    metaDataService.loadDroneTypes().then(
      droneTypes => {
        dispatch(success(droneTypes));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

function request() {
  return { type: LOAD_METADATA_REQUEST };
}
function success(metaData) {
  return { type: LOAD_METADATA_SUCCESS, metaData };
}
function failure(errors) {
  return { type: LOAD_METADATA_FAILURE, errors };
}
