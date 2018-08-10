import { combineReducers } from "redux";

import { authentication } from "./authenticationReducer";
import { registration } from "./registrationReducer";
import { resetPasswordLink } from "./resetPasswordLinkReducer";
import { resetPassword } from "./resetPasswordReducer";
import { localDroneAcquisitionApplications } from "./localDroneAcquisitionApplicationsReducer";
import { importDroneApplications } from "./importDroneApplicationsReducer";
import { pilotProfile } from "./pilotProfileReducer";
import { operatorProfile } from "./operatorProfileReducer";
import { uaopApplications } from "./uaopApplicationsReducer";
import { uinApplications } from "./uinApplicationsReducer";
import { adminApplications } from "./adminApplicationsReducer";
import { userApplications } from "./userApplicationsReducer";
import { metaData } from "./metaDataReducer";
import { accountVerification } from "./accountVerificationReducer";
import { adminBlog } from "./adminBlogReducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  resetPasswordLink,
  resetPassword,
  localDroneAcquisitionApplications,
  importDroneApplications,
  pilotProfile,
  operatorProfile,
  uaopApplications,
  uinApplications,
  adminApplications,
  userApplications,
  metaData,
  accountVerification,
  adminBlog
});

export default rootReducer;
