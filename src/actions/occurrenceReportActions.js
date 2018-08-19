import { droneService } from "../services/droneService";

export const SAVE_OCCURRENCE_REPORT_SUCCESS = "SAVE_OCCURRENCE_REPORT_SUCCESS";
export const SAVE_OCCURRENCE_REPORT_FAILURE = "SAVE_OCCURRENCE_REPORT_FAILURE";
export const LOAD_OCCURRENCE_REPORTS_SUCCESS = "LOAD_OCCURRENCE_REPORTS_SUCCESS";
export const LOAD_OCCURRENCE_REPORTS_FAILURE = "LOAD_OCCURRENCE_REPORTS_FAILURE";

export const loadOccurrenceReportsAction = (drone_id) => {
    return dispatch => {
            droneService.loadOccurrenceReports(drone_id).then(
                occurrenceReports => {
                    dispatch(success(occurrenceReports));
                },
                errors => {
                    dispatch(failure(errors));
                }
            );
        };

        function success(occurrenceReports) {
            return { type: LOAD_OCCURRENCE_REPORTS_SUCCESS, occurrenceReports};
        }
        function failure(errors) {
            return { type: LOAD_OCCURRENCE_REPORTS_FAILURE, errors };
        }
};

export const saveOccurrenceReportAction = (occurrenceReport) => {
    return dispatch => {
            droneService.saveOccurrenceReport(occurrenceReport).then(
                savedReport => {
                    dispatch(success(savedReport));
                },
                errors => {
                    dispatch(failure(errors));
                }
            );
        };

        function success(report) {
            return { type: SAVE_OCCURRENCE_REPORT_SUCCESS, report};
        }
        function failure(errors) {
            return { type: SAVE_OCCURRENCE_REPORT_FAILURE, errors };
        }
};