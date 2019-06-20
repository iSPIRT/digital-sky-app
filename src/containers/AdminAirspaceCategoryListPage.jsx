import React from 'react';

import { connect } from 'react-redux';

import AdminAirspaceCategoryList from '../components/AdminAirspaceCategoryList';

import { loadAirspaceCategoriesAction } from '../actions/adminActions';
import { checkAdminAction } from '../actions/loginActions';

class AdminAirspaceCategoryListPage extends React.Component {

    constructor(props) {
        super(props);
        const { airspaceCategoryList } = this.props;
        this.state={
            isAdmin:false
        }
        this.props.dispatch(loadAirspaceCategoriesAction());
        this.props.dispatch(checkAdminAction(localStorage.getItem('accessToken')));
    }

    componentWillReceiveProps(){
        if(this.props.adminCheck)
            this.setState({isAdmin:true})
        else
            this.setState({isAdmin:false})
    }

    render() {
        const { errors, airspaceCategoryList} = this.props;
        const { isAdmin } = this.state;
        if(isAdmin)
            return <AdminAirspaceCategoryList
                        errors={errors}
                        airspaceCategoryList={airspaceCategoryList}
                />
        else
            return null
    }
}

function mapStateToProps(state) {
     const { errors, airspaceCategoryList } = state.adminAirspaceCategory;
     const { adminCheck } = state.adminTest;
     return {
        airspaceCategoryList,
        errors,
        adminCheck
     };
}

export default connect(
    mapStateToProps
)(AdminAirspaceCategoryListPage)