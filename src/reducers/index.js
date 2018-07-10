import { combineReducers } from 'redux';

import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { resetPasswordLink } from './resetPasswordLinkReducer';
import { resetPassword } from './resetPasswordReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  resetPasswordLink,
  resetPassword
});

export default rootReducer;