import { MANUFACTURER_PROFILE_FORM_LOADED } from "../actions/manufacturerProfileActions";
import { SAVE_MANUFACTURER_PROFILE_REQUEST } from "../actions/manufacturerProfileActions";
import { SAVE_MANUFACTURER_PROFILE_SUCCESS } from "../actions/manufacturerProfileActions";
import { SAVE_MANUFACTURER_PROFILE_FAILURE } from "../actions/manufacturerProfileActions";
import { LOAD_MANUFACTURER_PROFILE_SUCCESS } from "../actions/manufacturerProfileActions";
import { LOAD_MANUFACTURER_PROFILE_FAILURE } from "../actions/manufacturerProfileActions";

const manufacturerProfileId = localStorage.getItem("manufacturerProfileId");

const manufacturerProfileSaved = manufacturerProfileId > 0 ? true : false;

const initialState = {
  savingManufacturerProfile: false,
  manufacturerProfileSaved,
  errors: [],
  profile: { empty: "empty" }
};

export function manufacturerProfile(state = initialState, action) {
  switch (action.type) {
    case MANUFACTURER_PROFILE_FORM_LOADED:
      return { ...state, errors: [] };
    case SAVE_MANUFACTURER_PROFILE_REQUEST:
      return {
        ...state,
        savingManufacturerProfile: true,
        manufacturerProfileSaved: false,
        errors: []
      };
    case SAVE_MANUFACTURER_PROFILE_SUCCESS:
      return {
        savingManufacturerProfile: false,
        manufacturerProfileSaved: true,
        errors: [],
        profile: action.manufacturerProfile
      };
    case SAVE_MANUFACTURER_PROFILE_FAILURE:
      return {
        ...state,
        savingManufacturerProfile: false,
        manufacturerProfileSaved: false,
        errors: action.errors
      };
    case LOAD_MANUFACTURER_PROFILE_SUCCESS:
      return { ...state, profile: action.manufacturerProfile };
    case LOAD_MANUFACTURER_PROFILE_FAILURE:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}
