import React from 'react';

import { connect } from 'react-redux';

import AdminAirspaceCategoryList from '../components/AdminAirspaceCategoryList';

import { loadAirspaceCategoriesAction } from '../actions/adminActions';

class AdminAirspaceCategoryListPage extends React.Component {

    constructor(props) {
        super(props);
        const { airspaceCategoryList } = this.props;
        if( airspaceCategoryList.length === 0 ){
            this.props.dispatch(loadAirspaceCategoriesAction());
        }
    }
    render() {
        const { errors, airspaceCategoryList} = this.props;
        return <AdminAirspaceCategoryList
                    errors={errors}
                    airspaceCategoryList={airspaceCategoryList}
               />
    }
}

function mapStateToProps(state) {
     const { errors, airspaceCategoryList } = state.adminAirspaceCategory;
     return {
        airspaceCategoryList,
        errors
     };
}

export default connect(
    mapStateToProps
)(AdminAirspaceCategoryListPage)