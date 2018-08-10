import React from 'react';

import { connect } from 'react-redux';

import AdminBlogList from '../components/AdminBlogList';

import { loadBlogListAction } from '../actions/adminActions';

class AdminBlogPage extends React.Component {

    constructor(props) {
        super(props);
        const { blogList } = this.props;
        if( blogList.length === 0 ){
            this.props.dispatch(loadBlogListAction());
        }
    }
    render() {
        const { errors, blogList} = this.props;
        return <AdminBlogList
                    errors={errors}
                    blogList={blogList}
               />
    }
}

function mapStateToProps(state) {
     const { errors, blogList } = state.adminBlog;
     return {
        blogList,
        errors
     };
}

export default connect(
  mapStateToProps
)(AdminBlogPage)