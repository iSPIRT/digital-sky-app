import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FLY_DRONE_PERMISSION_APPLICATION } from "../constants/applicationType";
import queryString from "query-string";

class AdditionalInfoPage extends React.Component {
  constructor(props) {
    super(props);
    const queryParams = queryString.parse(this.props.location.search);
    this.state = {
      id: queryParams.id,
      type: queryParams.type
    };
  }
  render() {
    const pilot = this.props.pilotProfile;
    const operator = this.props.operatorProfile.profile;
    const applications = this.props.adminApplications[this.state.type];
    if (!applications || applications.length === 0) return <div />;
    const currentApplication = applications.find(
      application => application.id === this.state.id
    );

    return (
      <div id="view-application">
        <div id="application-preview">
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="large-12 cell">
                <div>
                  <Link
                    to={"/admin/dashboard?type=" + this.state.applicationType}
                  >
                    Back
                  </Link>
                </div>
                <div className="question">
                  <h6>Operator Name:</h6>
                  <p>{operator.name}</p>
                </div>
                <div className="question">
                  <h6>Operator Email:</h6>
                  <p>{operator.email}</p>
                </div>
                <div className="question">
                  <h6>Pilot Name</h6>
                  <p>{pilot.name}</p>
                </div>
                <div className="question">
                  <h6>Pilot Name</h6>
                  <p>{pilot.email}</p>
                </div>
                <div className="question">
                  <h6>UIN</h6>
                  <p>{currentApplication.id}</p>
                </div>
                <div className="question">
                  <h6>UAOP</h6>
                  <p />
                </div>
                <div className="question">
                  <h6>Payload Details:</h6>
                  <p>{currentApplication.payloadDetails}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { adminApplications, operatorProfile } = state;
  const { pilotProfile } = state.adminView;
  return {
    adminApplications,
    pilotProfile,
    operatorProfile
  };
}

export default connect(mapStateToProps)(AdditionalInfoPage);
