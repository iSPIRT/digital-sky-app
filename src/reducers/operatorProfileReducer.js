import { OPERATOR_PROFILE_FORM_LOADED } from '../actions/operatorProfileActions';
import { SAVE_OPERATOR_PROFILE_REQUEST } from '../actions/operatorProfileActions';
import { SAVE_OPERATOR_PROFILE_SUCCESS } from '../actions/operatorProfileActions';
import { SAVE_OPERATOR_PROFILE_FAILURE } from '../actions/operatorProfileActions';
import { LOAD_OPERATOR_PROFILE_SUCCESS } from '../actions/operatorProfileActions';
import { LOAD_OPERATOR_PROFILE_FAILURE } from '../actions/operatorProfileActions';

const individualOperatorProfileId = localStorage.getItem('individualOperatorProfileId');
const organizationOperatorProfileId = localStorage.getItem('organizationOperatorProfileId');

const operatorProfileSaved = individualOperatorProfileId > 0 ? true : ( organizationOperatorProfileId > 0 ? true : false )

const initialState = { savingOperatorProfile: false, operatorProfileSaved, errors:[], profile:{ empty: 'empty' } };

export function operatorProfile(state = initialState, action) {
    switch (action.type) {
        case OPERATOR_PROFILE_FORM_LOADED:
          return { ...state, errors:[]};
        case SAVE_OPERATOR_PROFILE_REQUEST:
          return { ...state, savingOperatorProfile: true, operatorProfileSaved: false, errors:[]};
        case SAVE_OPERATOR_PROFILE_SUCCESS:
          return { savingOperatorProfile:false, operatorProfileSaved: true, errors:[], profile: action.operatorProfile };
        case SAVE_OPERATOR_PROFILE_FAILURE:
          return { ...state, savingOperatorProfile:false, operatorProfileSaved: false, errors: action.errors };
        case LOAD_OPERATOR_PROFILE_SUCCESS:
          return { ...state, profile: action.operatorProfile };
        case LOAD_OPERATOR_PROFILE_FAILURE:
          return { ...state, errors: action.errors };
        default:
          return state
    }
}
