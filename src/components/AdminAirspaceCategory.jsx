import React from 'react';

import FormErrors from '../components/FormErrors';

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

import { Link } from 'react-router-dom'

class AdminAirspaceCategory extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            airspaceCategory: this.props.airspaceCategory
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({formErrors: []});
        if( nextProps.errors.length === 0){
            if(this.state.airspaceCategory) {
                const {airspaceCategory} = this.state;
                airspaceCategory.id = nextProps.airspaceCategory ? nextProps.airspaceCategory.id : airspaceCategory.id;
                this.setState({airspaceCategory});
            } else {
                this.setState({airspaceCategory: nextProps.airspaceCategory});
            }
        }
    }

    handleChange(event) {
        const { name, value} = event.target;
        const { airspaceCategory } = this.state;
        this.updateObjProp(airspaceCategory, value, name);
        this.setState({airspaceCategory: airspaceCategory});
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
        const formErrors = [];
        var geoJson = {};
        try {
            if(!this.refs.geoJson.value){
                formErrors.push('Please provide valid geo json');
            } else {
                geoJson= JSON.parse(this.refs.geoJson.value);
            }
        } catch (e){
            formErrors.push('Please provide valid geo json');
        }

        this.setState({formErrors});

        if( formErrors.length > 0 ) return;

        this.setState({fieldErrors:{}});
        this.setState({submitted: true});
        const { airspaceCategory } = this.state;

        const formData = {
            id: airspaceCategory.id,
            name: airspaceCategory.name,
            type: airspaceCategory.type ? airspaceCategory.type : "RED",
            geoJson
        }
        if(this.state.airspaceCategory.id){
            this.props.updateAirspaceCategory(this.state.airspaceCategory.id, formData);
        } else{
            this.props.saveAirspaceCategory(formData);
        }
    }

    render() {
        const { savingAirspaceCategory, savedAirspaceCategory, errors} = this.props;
        const { formErrors, submitted, airspaceCategory} = this.state;
        const airspaceCategoryTypes = ["RED", "AMBER","GREEN"].map(type => {
            return (<option value={type} key={type}> {type} </option>);
        });
        if(!airspaceCategory){
            return (
                    <div className="page-header">
                      <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                          <div className="large-12 cell">
                            <p>Invalid AirspaceCategory </p>
                            <p><Link to="/admin/airspaceCategoryList">AirspaceCategory List</Link></p>
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
                        <h2>Save/Edit AirspaceCategory</h2>
                        { submitted && ( !errors || errors.length === 0)  &&  savedAirspaceCategory && <p> Successfully Saved AirspaceCategory<br/></p>}
                        <p><Link to="/admin/airspaceCategoryList">AirspaceCategory List</Link></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-form">
                    <FormErrors errors = {errors}/>
                    <FormErrors errors = {formErrors}/>
                    <form name="airspaceCategoryForm" onSubmit={this.handleSubmit}>
                        <div className="grid-container">
                            <div className="grid-x grid-padding-x">

                                <div className="large-12 cell">
                                    <label>Name
                                        <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={airspaceCategory.name} maxLength="50" className={decorateInputClass(this.state.fieldErrors['name'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                        <FieldError fieldErrors={this.state.fieldErrors} field='name'/>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Airspace Category Type
                                            <select name="type" value = { airspaceCategory.type } onChange= { this.handleChange }>
                                            { airspaceCategoryTypes }
                                            </select>
                                    </label>
                                </div>
                                <div className="large-12 cell">
                                    <label>Geo json
                                        <textarea name="geoJson" rows="10" defaultValue= { JSON.stringify(airspaceCategory.geoJson, undefined, 2) } ref="geoJson"/>
                                    </label>
                                </div>
                                <div className="large-12 cell">

                                    { submitted && ( !errors || errors.length === 0)  &&  savedAirspaceCategory && <p> Successfully Saved AirspaceCategory <br/></p>}

                                    <button type="submit" className="button" name="button">{airspaceCategory.id >0 ? 'Update' : 'Submit' }</button>
                                    {
                                       savingAirspaceCategory && <img alt="Loading..." src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AdminAirspaceCategory;