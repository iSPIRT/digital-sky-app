import { combineReducers } from 'redux';

import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';

const rootReducer = combineReducers({
  authentication,
  registration
});

export default rootReducer;