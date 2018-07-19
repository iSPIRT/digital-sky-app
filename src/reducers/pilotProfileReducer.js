import { PILOT_PROFILE_FORM_LOADED } from '../actions/pilotProfileActions';
import { SAVE_PILOT_PROFILE_REQUEST } from '../actions/pilotProfileActions';
import { SAVE_PILOT_PROFILE_SUCCESS } from '../actions/pilotProfileActions';
import { SAVE_PILOT_PROFILE_FAILURE } from '../actions/pilotProfileActions';
import { LOAD_PILOT_PROFILE_SUCCESS } from '../actions/pilotProfileActions';
import { LOAD_PILOT_PROFILE_FAILURE } from '../actions/pilotProfileActions';

const pilotProfileId = localStorage.getItem('pilotProfileId');

const pilotProfileSaved = ( pilotProfileId && pilotProfileId > 0 )

const initialState = { savingPilotProfile: false, pilotProfileSaved, errors:[], profile:{ empty: 'empty' } };

export function pilotProfile(state = initialState, action) {
    switch (action.type) {
        case PILOT_PROFILE_FORM_LOADED:
          return { ...state, errors:[]};
        case SAVE_PILOT_PROFILE_REQUEST:
          return { ...state, savingPilotProfile: true, pilotProfileSaved: false, errors:[]};
        case SAVE_PILOT_PROFILE_SUCCESS:
          return { savingPilotProfile:false, pilotProfileSaved: true, errors:[], profile: action.pilotProfile };
        case SAVE_PILOT_PROFILE_FAILURE:
          return { ...state, savingPilotProfile:false, pilotProfileSaved: false, errors: action.errors };
        case LOAD_PILOT_PROFILE_SUCCESS:
          return { ...state, profile: action.pilotProfile };
        case LOAD_PILOT_PROFILE_FAILURE:
          return { ...state, errors: action.errors };
        default:
          return state
    }
}
