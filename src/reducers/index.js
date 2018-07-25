import { combineReducers } from "redux";

import { authentication } from "./authenticationReducer";
import { registration } from "./registrationReducer";
import { resetPasswordLink } from "./resetPasswordLinkReducer";
import { resetPassword } from "./resetPasswordReducer";
import { saveLocalDroneAcquisitionApplication } from "./localDroneAcquisitionApplicationReducer";
import { saveImportDroneApplication } from "./importDroneApplicationReducer";
import { pilotProfile } from "./pilotProfileReducer";
import { operatorProfile } from "./operatorProfileReducer";
import { formStepChange } from "./applicationFormStepReducer";
import { uaopApplications } from "./uaopApplicationsReducer";
import { adminApplications } from "./adminApplicationsReducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  resetPasswordLink,
  resetPassword,
  saveLocalDroneAcquisitionApplication,
  saveImportDroneApplication,
  pilotProfile,
  operatorProfile,
  formStepChange,
  uaopApplications,
  adminApplications
});

export default rootReducer;
