import { userService } from "../services/userService";

export const MANUFACTURER_PROFILE_FORM_LOADED =
  "MANUFACTURER_PROFILE_FORM_LOADED";
export const SAVE_MANUFACTURER_PROFILE_REQUEST =
  "SAVE_MANUFACTURER_PROFILE_REQUEST";
export const SAVE_MANUFACTURER_PROFILE_SUCCESS =
  "SAVE_MANUFACTURER_PROFILE_SUCCESS";
export const SAVE_MANUFACTURER_PROFILE_FAILURE =
  "SAVE_MANUFACTURER_PROFILE_FAILURE";
export const LOAD_MANUFACTURER_PROFILE_SUCCESS =
  "LOAD_MANUFACTURER_PROFILE_SUCCESS";
export const LOAD_MANUFACTURER_PROFILE_FAILURE =
  "LOAD_MANUFACTURER_PROFILE_FAILURE";

export const createManufacturerProfileAction = manufacturerProfileFormData => {
  return dispatch => {
    dispatch(request());
    userService.createManufacturerProfile(manufacturerProfileFormData).then(
      profile => {
        dispatch(success(profile));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: SAVE_MANUFACTURER_PROFILE_REQUEST };
  }
  function success(manufacturerProfile) {
    return { type: SAVE_MANUFACTURER_PROFILE_SUCCESS, manufacturerProfile };
  }
  function failure(errors) {
    return { type: SAVE_MANUFACTURER_PROFILE_FAILURE, errors };
  }
};

export const updateManufacturerProfileAction = (
  manufacturerProfileId,
  manufacturerProfileFormData
) => {
  return dispatch => {
    dispatch(request());
    userService
      .updateManufacturerProfile(
        manufacturerProfileId,
        manufacturerProfileFormData
      )
      .then(
        profile => {
          dispatch(success(profile));
        },
        errors => {
          dispatch(failure(errors));
        }
      );
  };

  function request() {
    return { type: SAVE_MANUFACTURER_PROFILE_REQUEST };
  }
  function success(manufacturerProfile) {
    return { type: SAVE_MANUFACTURER_PROFILE_SUCCESS, manufacturerProfile };
  }
  function failure(errors) {
    return { type: SAVE_MANUFACTURER_PROFILE_FAILURE, errors };
  }
};

export const loadManufacturerProfile = manufacturerProfileId => {
  return dispatch => {
    userService.loadManufacturerProfile(manufacturerProfileId).then(
      data => {
        dispatch(success(data));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
  function success(manufacturerProfile) {
    return { type: LOAD_MANUFACTURER_PROFILE_SUCCESS, manufacturerProfile };
  }
  function failure(errors) {
    return { type: LOAD_MANUFACTURER_PROFILE_SUCCESS, errors };
  }
};

export const manufacturerProfileFormLoaded = () => {
  return { type: MANUFACTURER_PROFILE_FORM_LOADED };
};
