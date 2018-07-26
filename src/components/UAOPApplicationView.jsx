import React from 'react';


class UAOPApplicationView extends React.Component {

    render() {
        const { application } = this.props;
        return (
            <div className="large-12 cell">
                <div className="question">
                    <h6>Application Status:</h6>
                    <p>{application.status}</p>
                </div>
                <div className="question">
                    <h6>Name:</h6>
                    <p>{application.name}</p>
                </div>
                <div className="question">
                    <h6>Designation:</h6>
                    <p>{application.designation}</p>
                </div>
                <div className="question">
                    <h6>Security Program Document:</h6>
                    <a onClick={(e) =>  this.props.downloadDocument(application.securityProgramDocName)}>{application.securityProgramDocName}</a>
                </div>
                <div className="question">
                    <h6>Insurance Document:</h6>
                    <a onClick={(e) =>  this.props.downloadDocument(application.insuranceDocName)}>{application.insuranceDocName}</a>
                </div>
                <div className="question">
                    <h6>Standard Operating Procedure Document:</h6>
                    <a onClick={(e) =>  this.props.downloadDocument(application.sopDocName)}>{application.sopDocName}</a>
                </div>
                <div className="question">
                    <h6>Land Owner Permission Document:</h6>
                    <a onClick={(e) =>  this.props.downloadDocument(application.landOwnerPermissionDocName)}>{application.landOwnerPermissionDocName}</a>
                </div>
            </div>
        );
    }
}

export default UAOPApplicationView;