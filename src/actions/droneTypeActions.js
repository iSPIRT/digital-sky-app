import { droneService } from "../services/droneTypeService";

export const SAVE_DRONE_PROFILE_REQUEST = "SAVE_DRONE_PROFILE_REQUEST";
export const SAVE_DRONE_PROFILE_SUCCESS = "SAVE_DRONE_PROFILE_SUCCESS";
export const SAVE_DRONE_PROFILE_FAILURE = "SAVE_DRONE_PROFILE_FAILURE";

export const createDroneTypeAction = droneType => {
  return dispatch => {
    dispatch(request());
    droneService.create(droneType).then(
      createdDroneType => {
        dispatch(success(createdDroneType));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

export const updateDroneTypeAction = (droneType, id) => {
  return dispatch => {
    dispatch(request());
    droneService.edit(droneType, id).then(
      updatedDroneType => {
        dispatch(success(updatedDroneType));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
};

function request() {
  return { type: SAVE_DRONE_PROFILE_REQUEST };
}

function success(droneType) {
  return {
    type: SAVE_DRONE_PROFILE_SUCCESS,
    payload: droneType
  };
}
function failure(errors) {
  return {
    type: SAVE_DRONE_PROFILE_SUCCESS,
    payload: errors
  };
}
