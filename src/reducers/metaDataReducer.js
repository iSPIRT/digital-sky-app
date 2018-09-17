import {
  LOAD_METADATA_REQUEST,
  LOAD_DRONE_TYPES_SUCCESS,
  LOAD_OPERATOR_DEVICEID_SUCCESS,
  LOAD_METADATA_FAILURE
} from "../actions/metaDataActions";

const initialState = {
  droneTypes: [],
  deviceIds: [],
  metaDataerrors: []
};

export function metaData(state = initialState, action) {
  switch (action.type) {
    case LOAD_METADATA_REQUEST:
      return { ...state, metaDataerrors: [] };
    case LOAD_OPERATOR_DEVICEID_SUCCESS:
      return { ...state, deviceIds: action.operatorDeviceIds };
    case LOAD_DRONE_TYPES_SUCCESS:
      return { ...state, droneTypes: action.droneTypes };
    case LOAD_METADATA_FAILURE:
      return { metaDataerrors: action.error };
    default:
      return state;
  }
}
