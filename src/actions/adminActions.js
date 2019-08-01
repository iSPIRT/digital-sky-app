import { adminService } from "../services/adminService";
import { userService } from "../services/userService";

import { history } from "../store/configureStore";

export const LOAD_APPLICATIONS_REQUEST = "LOAD_APPLICATIONS_REQUEST";
export const LOAD_APPLICATIONS_SUCCESS = "LOAD_APPLICATIONS_SUCCESS";
export const LOAD_APPLICATIONS_FAILURE = "LOAD_APPLICATIONS_FAILURE";

export const APPROVE_APPLICATION_REQUEST = "APPROVE_APPLICATION_REQUEST";
export const APPROVE_APPLICATION_SUCCESS = "APPROVE_APPLICATION_SUCCESS";
export const APPROVE_APPLICATION_FAILURE = "APPROVE_APPLICATION_FAILURE";

export const loadApplicationsAction = (applicationType, adminType) => {
  return dispatch => {
    dispatch(request());
    adminService.loadApplications(applicationType, adminType).then(
      applications => {
        dispatch(success(applicationType, applications));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: LOAD_APPLICATIONS_REQUEST };
  }
  function success(applicationType, applications) {
    return { type: LOAD_APPLICATIONS_SUCCESS, applicationType, applications };
  }
  function failure(errors) {
    return { type: LOAD_APPLICATIONS_FAILURE, errors };
  }
};

export const approveApplicationsAction = (
  applicationType,
  applicationId,
  applicationApproval
) => {
  return dispatch => {
    dispatch(request());
    adminService
      .approveApplication(applicationType, applicationId, applicationApproval)
      .then(
        updatedApplication => {
          dispatch(success(applicationType, updatedApplication));
        },
        errors => {
          dispatch(failure(errors));
        }
      );
  };

  function request() {
    return { type: APPROVE_APPLICATION_REQUEST };
  }
  function success(applicationType, updatedApplication) {
    return {
      type: APPROVE_APPLICATION_SUCCESS,
      applicationType,
      updatedApplication
    };
  }
  function failure(errors) {
    return { type: APPROVE_APPLICATION_FAILURE, errors };
  }
};

export const approveApplicationsByAtcAction = (
  applicationType,
  applicationId,
  applicationApproval
) => {
  return dispatch => {
    dispatch(request());
    adminService
      .approveByAtcApplication(
        applicationType,
        applicationId,
        applicationApproval
      )
      .then(
        updatedApplication => {
          dispatch(success(applicationType, updatedApplication));
        },
        errors => {
          dispatch(failure(errors));
        }
      );
  };

  function request() {
    return { type: APPROVE_APPLICATION_REQUEST };
  }
  function success(applicationType, updatedApplication) {
    return {
      type: APPROVE_APPLICATION_SUCCESS,
      applicationType,
      updatedApplication
    };
  }
  function failure(errors) {
    return { type: APPROVE_APPLICATION_FAILURE, errors };
  }
};

export const approveApplicationsByAfmluAction = (
  applicationType,
  applicationId,
  applicationApproval
) => {
  return dispatch => {
    dispatch(request());
    adminService
      .approveByAfmluApplication(
        applicationType,
        applicationId,
        applicationApproval
      )
      .then(
        updatedApplication => {
          dispatch(success(applicationType, updatedApplication));
        },
        errors => {
          dispatch(failure(errors));
        }
      );
  };

  function request() {
    return { type: APPROVE_APPLICATION_REQUEST };
  }
  function success(applicationType, updatedApplication) {
    return {
      type: APPROVE_APPLICATION_SUCCESS,
      applicationType,
      updatedApplication
    };
  }
  function failure(errors) {
    return { type: APPROVE_APPLICATION_FAILURE, errors };
  }
};

export const LOAD_BLOG_LIST_SUCCESS = "LOAD_BLOG_LIST_SUCCESS";
export const LOAD_BLOG_LIST_FAILURE = "LOAD_BLOG_LIST_FAILURE";

export const SAVE_BLOG_REQUEST = "SAVE_BLOG_REQUEST";
export const SAVE_BLOG_SUCCESS = "SAVE_BLOG_SUCCESS";
export const SAVE_BLOG_FAILURE = "SAVE_BLOG_FAILURE";

export const saveBlogAction = blog => {
  return dispatch => {
    dispatch(request());
    adminService.saveBlog(blog).then(
      savedBlog => {
        dispatch(success(savedBlog));
        history.push("/admin/blog?id=" + savedBlog.id);
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: SAVE_BLOG_REQUEST };
  }
  function success(blog) {
    return { type: SAVE_BLOG_SUCCESS, blog };
  }
  function failure(errors) {
    return { type: SAVE_BLOG_FAILURE, errors };
  }
};

export const updateBlogAction = (id, blog) => {
  return dispatch => {
    dispatch(request());
    adminService.updateBlog(id, blog).then(
      updateBlog => {
        dispatch(success(updateBlog));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: SAVE_BLOG_REQUEST };
  }
  function success(blog) {
    return { type: SAVE_BLOG_SUCCESS, blog };
  }
  function failure(errors) {
    return { type: SAVE_BLOG_FAILURE, errors };
  }
};
export const loadBlogListAction = () => {
  return dispatch => {
    adminService.loadBlogList().then(
      blogList => {
        dispatch(success(blogList));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function success(blogList) {
    return { type: LOAD_BLOG_LIST_SUCCESS, blogList };
  }
  function failure(errors) {
    return { type: LOAD_BLOG_LIST_FAILURE, errors };
  }
};

export const LOAD_AIRSPACE_CATEGORY_LIST_SUCCESS =
  "LOAD_AIRSPACE_CATEGORY_LIST_SUCCESS";
export const LOAD_AIRSPACE_CATEGORY_LIST_FAILURE =
  "LOAD_AIRSPACE_CATEGORY_LIST_FAILURE";

export const SAVE_AIRSPACE_CATEGORY_REQUEST = "SAVE_AIRSPACE_CATEGORY_REQUEST";
export const SAVE_AIRSPACE_CATEGORY_SUCCESS = "SAVE_AIRSPACE_CATEGORY_SUCCESS";
export const SAVE_AIRSPACE_CATEGORY_FAILURE = "SAVE_AIRSPACE_CATEGORY_FAILURE";

export const loadAirspaceCategoriesAction = () => {
  return dispatch => {
    adminService.loadAirspaceCategories().then(
      airspaceCategoryList => {
        dispatch(success(airspaceCategoryList));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function success(airspaceCategoryList) {
    return { type: LOAD_AIRSPACE_CATEGORY_LIST_SUCCESS, airspaceCategoryList };
  }
  function failure(errors) {
    return { type: LOAD_AIRSPACE_CATEGORY_LIST_FAILURE, errors };
  }
};
export const saveAirspaceCategoryAction = airspaceCategory => {
  return dispatch => {
    dispatch(request());
    adminService.saveAirspaceCategory(airspaceCategory).then(
      savedAirspaceCategory => {
        dispatch(success(savedAirspaceCategory));
        history.push("/admin/airspaceCategory?id=" + savedAirspaceCategory.id);
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: SAVE_AIRSPACE_CATEGORY_REQUEST };
  }
  function success(airspaceCategory) {
    return { type: SAVE_AIRSPACE_CATEGORY_SUCCESS, airspaceCategory };
  }
  function failure(errors) {
    return { type: SAVE_AIRSPACE_CATEGORY_FAILURE, errors };
  }
};

export const updateAirspaceCategoryAction = (id, airspaceCategory) => {
  return dispatch => {
    dispatch(request());
    adminService.updateAirspaceCategory(id, airspaceCategory).then(
      updateAirspaceCategory => {
        dispatch(success(updateAirspaceCategory));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };

  function request() {
    return { type: SAVE_AIRSPACE_CATEGORY_REQUEST };
  }
  function success(airspaceCategory) {
    return { type: SAVE_AIRSPACE_CATEGORY_SUCCESS, airspaceCategory };
  }
  function failure(errors) {
    return { type: SAVE_AIRSPACE_CATEGORY_FAILURE, errors };
  }
};

export const ADMIN_VIEW_OPERATOR_PROFILE_SUCCESS =
  "ADMIN_VIEW_OPERATOR_PROFILE_SUCCESS";
export const ADMIN_VIEW_OPERATOR_PROFILE_FAILURE =
  "ADMIN_VIEW_OPERATOR_PROFILE_FAILURE";

export const viewOperatorProfile = (profileType, operatorProfileId) => {
  return dispatch => {
    userService.loadOperatorProfile(profileType, operatorProfileId).then(
      data => {
        dispatch(success(profileType, data));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
  function success(profileType, operatorProfile) {
    return {
      type: ADMIN_VIEW_OPERATOR_PROFILE_SUCCESS,
      profileType,
      operatorProfile
    };
  }
  function failure(errors) {
    return { type: ADMIN_VIEW_OPERATOR_PROFILE_FAILURE, errors };
  }
};

export const ADMIN_VIEW_PILOT_PROFILE_SUCCESS =
  "ADMIN_VIEW_PILOT_PROFILE_SUCCESS";
export const ADMIN_VIEW_PILOT_PROFILE_FAILURE =
  "ADMIN_VIEW_PILOT_PROFILE_FAILURE";

export const viewPilotProfile = pilotProfileId => {
  return dispatch => {
    userService.loadPilotProfile(pilotProfileId).then(
      data => {
        dispatch(success(data));
      },
      errors => {
        dispatch(failure(errors));
      }
    );
  };
  function success(pilotProfile) {
    return { type: ADMIN_VIEW_PILOT_PROFILE_SUCCESS, pilotProfile };
  }
  function failure(errors) {
    return { type: ADMIN_VIEW_PILOT_PROFILE_FAILURE, errors };
  }
};
