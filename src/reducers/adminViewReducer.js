import { ADMIN_VIEW_OPERATOR_PROFILE_SUCCESS } from "../actions/adminActions";
import { ADMIN_VIEW_OPERATOR_PROFILE_FAILURE } from "../actions/adminActions";
import { ADMIN_VIEW_PILOT_PROFILE_SUCCESS } from "../actions/adminActions";
import { ADMIN_VIEW_PILOT_PROFILE_FAILURE } from "../actions/adminActions";

const initialState = {
  operatorProfile: { empty: true},
  pilotProfile: {empty: true},
  errors: []
};

export function adminView(state = initialState, action) {
  switch (action.type) {

    case ADMIN_VIEW_OPERATOR_PROFILE_SUCCESS:
      return { operatorProfile: { type: action.profileType, profile: action.operatorProfile },  errors: [] };

    case ADMIN_VIEW_OPERATOR_PROFILE_FAILURE:
      return { operatorProfile: initialState.operatorProfile, errors: action.errors };

    case ADMIN_VIEW_PILOT_PROFILE_SUCCESS:
      return { pilotProfile: action.pilotProfile,  errors: [] };

    case ADMIN_VIEW_PILOT_PROFILE_FAILURE:
      return { pilotProfile: initialState.pilotProfile, errors: action.errors };

    default:
      return state;
  }
}
