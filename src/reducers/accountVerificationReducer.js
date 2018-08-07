import { VERIFY_ACCOUNT_SUCCESS } from "../actions/userActions";
import { VERIFY_ACCOUNT_FAILURE } from "../actions/userActions";

const initialState = { accountVerified: false, errors: [] };

export function accountVerification(state = initialState, action) {
  switch (action.type) {
    case VERIFY_ACCOUNT_SUCCESS:
      return { accountVerified: true, errors: [] };
    case VERIFY_ACCOUNT_FAILURE:
      return { accountVerified: false, errors: action.errors };
    default:
      return state;
  }
}
