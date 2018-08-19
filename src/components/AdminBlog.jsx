import React from 'react';

import FormErrors from '../components/FormErrors';

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

import { Link } from 'react-router-dom'

class AdminBlog extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
        this.addSection = this.addSection.bind(this);
        this.removeSection = this.removeSection.bind(this);
        this.sectionMarkup = this.sectionMarkup.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            blog: this.props.blog
        };
    }

    addSection(event){
        event.preventDefault();
        const {blog} = this.state;
        blog.sections.push('')
        this.setState({blog});
    }

    removeSection(index){
        const {blog} = this.state;
        blog.sections.splice(index,1);
        this.setState({blog});
    }

    componentWillReceiveProps(nextProps){
        this.setState({formErrors: []});
        if( nextProps.errors.length === 0 ){
            this.setState({blog: nextProps.blog});
        }
    }

    handleChange(event) {
        const { name, value} = event.target;
        const { blog } = this.state;
        this.updateObjProp(blog, value, name);
        this.setState({blog: blog});
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }

    handleSubmit(event) {
        event.preventDefault();
        const fieldErrors = validateForm(event.target)
        for (const key of Object.keys(fieldErrors)) {
            if(!fieldErrors[key].valid){
                this.setState({fieldErrors});
                return;
            }
        }

        this.setState({fieldErrors:{}});
        this.setState({submitted: true});
        const { blog } = this.state;
        blog.sections = blog.sections.filter( b => b.trim().length > 0)
        this.setState({blog})
        if(this.state.blog.id){
            this.props.updateBlog(this.state.blog.id, this.state.blog);
        } else{
            this.props.saveBlog(this.state.blog);
        }
    }

    sectionMarkup(blog){
        const handleChange = this.handleChange;
        const removeSection = this.removeSection;
        return this.state.blog.sections.map((section, index) => {
            return (
                <span>
                    <textarea name={'sections.'+index} rows="3" value= { blog.sections[index] } onChange={ handleChange }/>
                    { index > 0 &&
                        <button className="button button-light-clean" name="removeSection" onClick={(e) => removeSection(index)}>Remove</button>
                    }
                    <br/>
                </span>
            );
        });
    }

    render() {
        const { savingBlog, savedBlog, errors} = this.props;
        const { formErrors, submitted, blog} = this.state;
        console.log("");
        if(!blog){
            return (
                    <div className="page-header">
                      <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                          <div className="large-12 cell">
                            <p>Invalid Blog </p>
                            <p><Link to="/admin/blogList">Blog List</Link></p>
                          </div>
                        </div>
                      </div>
                    </div>
            );
        }

        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Save/Edit Blog</h2>
                        { submitted && ( !errors || errors.length === 0)  &&  savedBlog && <p> Successfully Saved Blog<br/></p>}
                        <p><Link to="/admin/blogList">Blog List</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="blogForm" onSubmit={this.handleSubmit}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">

                                <div className="large-12 cell">
                                    <label>Title
                                        <input type="text" placeholder="Title" name="title" onChange={this.handleChange} value={blog.title} maxLength="50" className={decorateInputClass(this.state.fieldErrors['title'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='title'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Section
                                        { this.sectionMarkup(blog) }
                                    </label>
                                </div>
                                <div className="large-6 cell">

                                    { submitted && ( !errors || errors.length === 0)  &&  savedBlog && <p> Successfully Saved Blog <br/></p>}

                                    <button type="submit" className="button" name="button">{blog.id >0 ? 'Update' : 'Submit' }</button>
                                    {
                                       savingBlog && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                <div className="large-6 cell">
                                    <button className="button button-light-clean" name="addSection" onClick={this.addSection}>Add Section</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AdminBlog;