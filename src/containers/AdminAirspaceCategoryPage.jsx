import React from 'react';

import { connect } from 'react-redux';

import queryString from 'query-string'

import AdminAirspaceCategory from '../components/AdminAirspaceCategory';

import { loadAirspaceCategoriesAction, saveAirspaceCategoryAction, updateAirspaceCategoryAction } from '../actions/adminActions';


class AdminAirspaceCategoryPage extends React.Component {

    constructor(props) {
        super(props);
        this.saveAirspaceCategory = this.saveAirspaceCategory.bind(this);
        this.updateAirspaceCategory = this.updateAirspaceCategory.bind(this);
        const airspaceCategoryId = this.findCurrentAirspaceCategoryId();
        const { airspaceCategoryList } = this.props;
        if( airspaceCategoryId && airspaceCategoryList.length === 0 ){
            this.props.dispatch(loadAirspaceCategoriesAction());
        }
    }

    findCurrentAirspaceCategoryId(){
        const queryParams = queryString.parse(this.props.location.search)
        return parseInt(queryParams.id, 10);
    }

    saveAirspaceCategory(airspaceCategory){
        this.props.dispatch(saveAirspaceCategoryAction(airspaceCategory));
    }

    updateAirspaceCategory(id, airspaceCategory){
        this.props.dispatch(updateAirspaceCategoryAction(id, airspaceCategory));
    }


    render() {
        const { savingAirspaceCategory, savedAirspaceCategory, errors, airspaceCategoryList} = this.props;
        var airspaceCategory = {};
        const airspaceCategoryId = this.findCurrentAirspaceCategoryId();
        if(airspaceCategoryId) {
            airspaceCategory =  airspaceCategoryList.find( airspaceCategory => airspaceCategory.id === airspaceCategoryId )
        }
        return <AdminAirspaceCategory
                    savingAirspaceCategory={savingAirspaceCategory}
                    savedAirspaceCategory={savedAirspaceCategory}
                    errors={errors}
                    airspaceCategory={airspaceCategory}
                    saveAirspaceCategory={this.saveAirspaceCategory}
                    updateAirspaceCategory={this.updateAirspaceCategory}
               />
    }
}

function mapStateToProps(state) {
     const { savingAirspaceCategory, savedAirspaceCategory, errors, airspaceCategoryList } = state.adminAirspaceCategory;
     return {
        savingAirspaceCategory,
        savedAirspaceCategory,
        airspaceCategoryList,
        errors
     };
}

export default connect(
  mapStateToProps
)(AdminAirspaceCategoryPage)