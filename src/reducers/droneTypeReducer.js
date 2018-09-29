import {
  SAVE_DRONE_PROFILE_REQUEST,
  SAVE_DRONE_PROFILE_SUCCESS,
  SAVE_DRONE_PROFILE_FAILURE
} from "../actions/droneTypeActions";

const initialState = {
  saving: false,
  saved: false,
  droneType: {
    manufacturerAddress: {
      lineOne: "",
      lineTwo: "",
      city: "",
      state: "",
      country: "",
      pinCode: ""
    },
    dimensions: {
      length: 0,
      breadth: 0,
      height: 0
    }
  },
  errors: []
};

export function droneType(state = initialState, action) {
  switch (action.type) {
    case SAVE_DRONE_PROFILE_REQUEST:
      return { ...state, saving: true, errors: [] };
    case SAVE_DRONE_PROFILE_SUCCESS:
      return {
        ...state,
        saving: false,
        saved: true,
        errors: [],
        droneType: action.payload
      };
    case SAVE_DRONE_PROFILE_FAILURE:
      return { ...state, saving: false, saved: false, errors: action.payload };
    default:
      return state;
  }
}
