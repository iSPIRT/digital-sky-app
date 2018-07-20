import { combineReducers } from "redux";

import { authentication } from "./authenticationReducer";
import { registration } from "./registrationReducer";
import { resetPasswordLink } from "./resetPasswordLinkReducer";
import { resetPassword } from "./resetPasswordReducer";
import { saveLocalDroneAcquisitionApplication } from "./localDroneAcquisitionApplicationReducer";
import { formStepChange } from "./applicationFormStepReducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  resetPasswordLink,
  resetPassword,
  saveLocalDroneAcquisitionApplication,
  formStepChange
});

export default rootReducer;
