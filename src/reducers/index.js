import { combineReducers } from "redux";

import { authentication } from "./authenticationReducer";
import { registration } from "./registrationReducer";
import { resetPasswordLink } from "./resetPasswordLinkReducer";
import { resetPassword } from "./resetPasswordReducer";
import { localDroneAcquisitionApplications } from "./localDroneAcquisitionApplicationsReducer";
import { importDroneApplications } from "./importDroneApplicationsReducer";
import { pilotProfile } from "./pilotProfileReducer";
import { operatorProfile } from "./operatorProfileReducer";
import { manufacturerProfile } from "./manufacturerProfileReducer";
import { uaopApplications } from "./uaopApplicationsReducer";
import { uinApplications } from "./uinApplicationsReducer";
import { adminApplications } from "./adminApplicationsReducer";
import { userApplications, user } from "./userApplicationsReducer";
import { metaData } from "./metaDataReducer";
import { droneProfile } from "./droneProfileReducer";
import { accountVerification } from "./accountVerificationReducer";
import { adminBlog } from "./adminBlogReducer";
import { occurrenceReport } from "./occurrenceReportReducer";
import { adminAirspaceCategory } from "./adminAirspaceCategoryReducer";
import { flyDronePermissionApplications } from "./flyDronePermissionApplicationsReducer";
import { userAirspaceCategory } from "./userAirspaceCategoryReducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  resetPasswordLink,
  resetPassword,
  localDroneAcquisitionApplications,
  importDroneApplications,
  pilotProfile,
  operatorProfile,
  manufacturerProfile,
  uaopApplications,
  uinApplications,
  adminApplications,
  userApplications,
  metaData,
  accountVerification,
  droneProfile,
  adminBlog,
  user,
  occurrenceReport,
  adminAirspaceCategory,
  flyDronePermissionApplications,
  userAirspaceCategory
});

export default rootReducer;
