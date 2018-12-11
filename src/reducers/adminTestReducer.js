import { ADMIN_CHECK_SUCCESS } from "../actions/loginActions";
import { ADMIN_CHECK_FAILURE } from "../actions/loginActions";

const initialState = { adminCheck: false };

export function adminTest(state = initialState, action) {
  switch (action.type) {
    case ADMIN_CHECK_SUCCESS:
      return { adminCheck: true };
    case ADMIN_CHECK_FAILURE:
      return { adminCheck: false };
    default:
      return state;
  }
}
