import { combineReducers } from "redux";

import { authentication } from "./authenticationReducer";
import { registration } from "./registrationReducer";
import { resetPasswordLink } from "./resetPasswordLinkReducer";
import { resetPassword } from "./resetPasswordReducer";
import { localDroneAcquisitionApplications } from "./localDroneAcquisitionApplicationsReducer";
import { importDroneApplications } from "./importDroneApplicationsReducer";
import { pilotProfile } from "./pilotProfileReducer";
import { operatorProfile } from "./operatorProfileReducer";
import { formStepChange } from "./applicationFormStepReducer";
import { uaopApplications } from "./uaopApplicationsReducer";
import { uinApplications } from "./uinApplicationsReducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  resetPasswordLink,
  resetPassword,
  localDroneAcquisitionApplications,
  importDroneApplications,
  pilotProfile,
  operatorProfile,
  formStepChange,
  uaopApplications,
  uinApplications
});

export default rootReducer;
