import { LOAD_AIRSPACE_CATEGORY_LIST_SUCCESS } from "../actions/adminActions";
import { LOAD_AIRSPACE_CATEGORY_LIST_FAILURE } from "../actions/adminActions";

import { SAVE_AIRSPACE_CATEGORY_REQUEST } from "../actions/adminActions";
import { SAVE_AIRSPACE_CATEGORY_SUCCESS } from "../actions/adminActions";
import { SAVE_AIRSPACE_CATEGORY_FAILURE } from "../actions/adminActions";

const initialState = {
  savingAirspaceCategory: false,
  savedAirspaceCategory: false,
  errors: [],
  currentAirspaceCategoryId: -1,
  airspaceCategoryList: []
};

export function adminAirspaceCategory(state = initialState, action) {
  switch (action.type) {
    case LOAD_AIRSPACE_CATEGORY_LIST_SUCCESS:
      const airspaceCategoryList = action.airspaceCategoryList;
      return {
        ...state,
        airspaceCategoryList
      };
    case LOAD_AIRSPACE_CATEGORY_LIST_FAILURE:
      return { ...state, errors: action.errors };
    case SAVE_AIRSPACE_CATEGORY_REQUEST:
      return { ...state, savingAirspaceCategory: true, errors: [] };
    case SAVE_AIRSPACE_CATEGORY_SUCCESS:
      const { airspaceCategory } = action;
      const currentAirspaceCategoryList = state.airspaceCategoryList;
      const indexOfUpdatedAirspaceCategory = currentAirspaceCategoryList.findIndex(
        a => a.id === airspaceCategory.id
      );
      const updatedAirspaceCategoryList = [
        ...currentAirspaceCategoryList.slice(0, indexOfUpdatedAirspaceCategory),
        airspaceCategory,
        ...currentAirspaceCategoryList.slice(indexOfUpdatedAirspaceCategory + 1)
      ];
      return {
        errors: [],
        savedAirspaceCategory: true,
        savingAirspaceCategory: false,
        airspaceCategoryList: updatedAirspaceCategoryList
      };
    case SAVE_AIRSPACE_CATEGORY_FAILURE:
      return { ...state, savingAirspaceCategory: false, errors: action.errors };
    default:
      return state;
  }
}
