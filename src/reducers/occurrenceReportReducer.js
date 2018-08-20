import { LOAD_OCCURRENCE_REPORTS_SUCCESS } from "../actions/occurrenceReportActions";
import { LOAD_OCCURRENCE_REPORTS_FAILURE } from "../actions/occurrenceReportActions";

import { SAVE_OCCURRENCE_REPORT_SUCCESS } from "../actions/occurrenceReportActions";
import { SAVE_OCCURRENCE_REPORT_FAILURE } from "../actions/occurrenceReportActions";

const initialState = {
  savedOccurrenceReports: false,
  errors: [],
  occurrenceReports: []
};

export function occurrenceReport(state = initialState, action) {
  switch (action.type) {
    case LOAD_OCCURRENCE_REPORTS_SUCCESS:
      const occurrenceReports = action.occurrenceReports;
      return {
        ...state,
        occurrenceReports
      };
    case LOAD_OCCURRENCE_REPORTS_FAILURE:
      return { ...state, errors: action.errors };
    case SAVE_OCCURRENCE_REPORT_SUCCESS:
      const { report } = action;
      const currentList = state.occurrenceReports;
      const updateList = [report, ...currentList.slice(0)];
      return {
        errors: [],
        savedOccurrenceReports: true,
        occurrenceReports: updateList
      };
    case SAVE_OCCURRENCE_REPORT_FAILURE:
      return { ...state, savedOccurrenceReports: false, errors: action.errors };
    default:
      return state;
  }
}
