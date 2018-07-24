import { UAOP_APPLICATION_FORM_LOADED } from '../actions/uaopApplicationActions';
import { SAVE_UAOP_APPLICATION_REQUEST } from '../actions/uaopApplicationActions';
import { SAVE_UAOP_APPLICATION_SUCCESS } from '../actions/uaopApplicationActions';
import { SAVE_UAOP_APPLICATION_FAILURE } from '../actions/uaopApplicationActions';
import { LOAD_UAOP_APPLICATION_SUCCESS } from '../actions/uaopApplicationActions';
import { LOAD_UAOP_APPLICATION_FAILURE } from '../actions/uaopApplicationActions';

const initialState = { savingApplication: false, currentApplication: { id: 0 }, errors: [] };

export function uaopApplications(state = initialState, action) {
    switch (action.type) {
        case UAOP_APPLICATION_FORM_LOADED:
          return { ...state, errors:[]};
        case SAVE_UAOP_APPLICATION_REQUEST:
          return { ...state, savingApplication: true, errors:[]};
        case SAVE_UAOP_APPLICATION_SUCCESS:
          return { savingApplication:false, errors:[], currentApplication: action.application };
        case SAVE_UAOP_APPLICATION_FAILURE:
          return { ...state, savingApplication:false, errors: action.errors };
        case LOAD_UAOP_APPLICATION_SUCCESS:
          return { ...state, currentApplication: action.application };
        case LOAD_UAOP_APPLICATION_FAILURE:
          return { ...state, errors: action.errors };
        default:
          return state
    }
}
