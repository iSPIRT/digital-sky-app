import { LOAD_USER_AIRSPACE_CATEGORIES_SUCCESS } from "../actions/userAirspaceCategoryActions";
import { LOAD_USER_AIRSPACE_CATEGORIES_FAILURE } from "../actions/userAirspaceCategoryActions";

const initialState = {
  airspaceCategories: { empty: true },
  errors: []
};

export function userAirspaceCategory(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_AIRSPACE_CATEGORIES_SUCCESS:
      return { airspaceCategories: action.airspaceCategories, errors: [] };
    case LOAD_USER_AIRSPACE_CATEGORIES_FAILURE:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}
