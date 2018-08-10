import React from 'react';

import FormErrors from '../components/FormErrors';

import { Link } from 'react-router-dom'

class AdminBlogList extends React.Component {


    blogListMarkup(blogList){
        return blogList.map((blog) => {
            return <p><Link to={'/admin/blog?id='+blog.id}>{blog.title}</Link><br/></p>
        });
    }

    render() {
        const {errors, blogList} = this.props;
        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Blog List</h2>
                        <p><Link to="/admin/blog">Add New</Link><br/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-dashboard">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <FormErrors errors = {errors}/>
                                {this.blogListMarkup(blogList)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminBlogList;