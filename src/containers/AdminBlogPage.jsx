import React from 'react';

import { connect } from 'react-redux';

import queryString from 'query-string'

import AdminBlog from '../components/AdminBlog';

import { loadBlogListAction, saveBlogAction, updateBlogAction } from '../actions/adminActions';


class AdminBlogPage extends React.Component {

    constructor(props) {
        super(props);
        this.saveBlog = this.saveBlog.bind(this);
        this.updateBlog = this.updateBlog.bind(this);
        const blogId = this.findCurrentBlogId();
        const { blogList } = this.props;
        if( blogId && blogList.length === 0 ){
            this.props.dispatch(loadBlogListAction());
        }
    }

    findCurrentBlogId(){
        const queryParams = queryString.parse(this.props.location.search)
        return parseInt(queryParams.id, 10);
    }

    saveBlog(blog){
        this.props.dispatch(saveBlogAction(blog));
    }

    updateBlog(id, blog){
        this.props.dispatch(updateBlogAction(id, blog));
    }


    render() {
        const { savingBlog, savedBlog, errors, blogList} = this.props;
        var blog = {sections:['']}
        const blogId = this.findCurrentBlogId();
        if(blogId) {
            blog =  blogList.find( blog => blog.id === blogId )
        }
        return <AdminBlog
                    savingBlog={savingBlog}
                    savedBlog={savedBlog}
                    errors={errors}
                    blog={blog}
                    saveBlog={this.saveBlog}
                    updateBlog={this.updateBlog}
               />
    }
}

function mapStateToProps(state) {
     const { savingBlog, savedBlog, errors, blogList } = state.adminBlog;
     return {
        savingBlog,
        savedBlog,
        blogList,
        errors
     };
}

export default connect(
  mapStateToProps
)(AdminBlogPage)