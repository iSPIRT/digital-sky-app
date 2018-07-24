import { combineReducers } from "redux";

import { authentication } from "./authenticationReducer";
import { registration } from "./registrationReducer";
import { resetPasswordLink } from "./resetPasswordLinkReducer";
import { resetPassword } from "./resetPasswordReducer";
import { saveLocalDroneAcquisitionApplication } from "./localDroneAcquisitionApplicationReducer";
import { saveImportDroneAcquisitionApplication } from "./importDroneAcquisitionApplicationReducer";
import { pilotProfile } from "./pilotProfileReducer";
import { operatorProfile } from "./operatorProfileReducer";
import { formStepChange } from "./applicationFormStepReducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  resetPasswordLink,
  resetPassword,
  saveLocalDroneAcquisitionApplication,
  saveImportDroneAcquisitionApplication,
  pilotProfile,
  operatorProfile,
  formStepChange
});

export default rootReducer;
