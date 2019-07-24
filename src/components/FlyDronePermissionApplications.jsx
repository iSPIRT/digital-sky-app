import React from 'react';

import FormErrors from '../components/FormErrors';

import { Link } from 'react-router-dom'

class FlyDronePermissionApplications extends React.Component {


    applicationsMarkup(applications){
        return applications.map((application) => {
            return (
                <tr>
                    <td>{application.id}</td>
                    <td>{application.lastModifiedDate}</td>
                    <td>{application.status}</td>
                    <Link to={'/flyDronePermissionApplication?id='+application.id+"&droneId="+this.props.droneId}>View/Edit</Link>
                </tr>
            )
        });
    }

    render() {
        const {errors, applications} = this.props;
        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>List of Flight Plans</h2>
                        <p><Link to={"/flyDronePermissionApplication?droneId="+this.props.droneId}>Apply for Flight Permission</Link><br/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-dashboard">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <FormErrors errors = {errors}/>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Last Modified Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.applicationsMarkup(applications)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlyDronePermissionApplications;