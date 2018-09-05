import React from 'react';

import FormErrors from '../components/FormErrors';

import { Link } from 'react-router-dom'

class AdminAirspaceCategoryList extends React.Component {


    airspaceCategoryListMarkup(airspaceCategoryList){
        return airspaceCategoryList.map((airspaceCategory) => {
            return (
                <tr>
                    <td>{airspaceCategory.name}</td>
                    <td>{airspaceCategory.type}</td>
                    <Link to={'/admin/airspaceCategory?id='+airspaceCategory.id}>View/Edit</Link>
                </tr>
            )
        });
    }

    render() {
        const {errors, airspaceCategoryList} = this.props;
        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Airspace Categories</h2>
                        <p><Link to="/admin/airspaceCategory">Add New</Link><br/></p>
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
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.airspaceCategoryListMarkup(airspaceCategoryList)}
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

export default AdminAirspaceCategoryList;