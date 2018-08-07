import {
  LOAD_METADATA_REQUEST,
  LOAD_METADATA_SUCCESS,
  LOAD_METADATA_FAILURE
} from "../actions/metaDataActions";

const initialState = {
  droneTypes: [],
  metaDataerrors: []
};

export function metaData(state = initialState, action) {
  switch (action.type) {
    case LOAD_METADATA_REQUEST:
      return { ...state, metaDataerrors: [] };
    case LOAD_METADATA_SUCCESS:
      return { ...state, droneTypes: action.metaData };
    case LOAD_METADATA_FAILURE:
      return { metaDataerrors: action.error };
    default:
      return state;
  }
}
