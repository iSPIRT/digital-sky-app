import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import FormErrors from '../components/FormErrors';
import DashboardDroneTypeView from '../components/DashboardDroneTypeView';

import { loadMetaDataAction } from '../actions/metaDataActions';

class AdminDashboardDroneTypePage extends React.Component {
  
    constructor(props) {
        super(props);
        this.props.dispatch(loadMetaDataAction());
    }

    render() {
        const { errors, droneTypes } = this.props;
        return (
                <div>
                    <div className="page-header dashboard-header">
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">
                                <div className="large-12 cell">
                                    <Link to="/droneType" className="button">Add new Drone</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-dashboard">
                        <section id="my-drones">
                            <div className="grid-container">
                                <div className="grid-x grid-padding-x">
                                    <div className="large-12 cell">
                                        <h3>Drones</h3>
                                        <FormErrors errors = {errors}/>
                                        <DashboardDroneTypeView droneTypes={droneTypes} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
        )
    }
}   

function mapStateToProps(state) {
    const { droneTypes } = state.metaData;
    return {
        droneTypes
    };
}

export default connect(
    mapStateToProps
)(AdminDashboardDroneTypePage)
