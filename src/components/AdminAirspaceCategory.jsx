import React from 'react';

import FormErrors from '../components/FormErrors';

import FieldError from '../components/FieldError';

import { validateField, validateForm, decorateInputClass } from '../helpers/formValidationHelpers';

import { Link } from 'react-router-dom';

import moment from 'moment';

import DatePicker from 'react-datepicker';

class AdminAirspaceCategory extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleChangeTempEndTime = this.handleChangeTempEndTime.bind(this);
        this.handleChangeTempStartTime = this.handleChangeTempStartTime.bind(this);
        this.state = {
            submitted: false,
            formErrors:[],
            fieldErrors: {},
            airspaceCategory: this.props.airspaceCategory,
            tempAirspace: false
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
        if(nextProps.airspaceCategory.tempStartTime && nextProps.airspaceCategory.tempEndTime){
            const airspaceCategory = nextProps.airspaceCategory;
            airspaceCategory.tempStartTime = moment(nextProps.airspaceCategory.tempStartTime, 'DD-MM-YYYY HH:mm:ss')
            airspaceCategory.tempEndTime = moment(nextProps.airspaceCategory.tempEndTime, 'DD-MM-YYYY HH:mm:ss')
            this.setState({tempAirspace:true,airspaceCategory:airspaceCategory})
        }
        else{
            this.setState({tempAirspace:false})
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

    toggle(){
        if(!this.state.tempAirspace==false){
            const { airspaceCategory } = this.state;
            airspaceCategory.tempStartTime="";
            airspaceCategory.tempEndTime="";
            this.setState({airspaceCategory:airspaceCategory});
        }
        this.setState({tempAirspace:!this.state.tempAirspace});        
    }

    handleChangeTempStartTime(startDateTime){
        const { airspaceCategory } = this.state;
        airspaceCategory.tempStartTime=startDateTime
        this.setState({airspaceCategory: airspaceCategory});
    }

    handleChangeTempEndTime(endDateTime){
        const { airspaceCategory } = this.state;
        airspaceCategory.tempEndTime=endDateTime
        this.setState({airspaceCategory: airspaceCategory});
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
            geoJson,
            minAltitude:airspaceCategory.minAltitude,
            tempStartTime:airspaceCategory.tempStartTime?airspaceCategory.tempStartTime.format('DD-MM-YYYY HH:mm:ss'):null,
            tempEndTime:airspaceCategory.tempEndTime?airspaceCategory.tempEndTime.format('DD-MM-YYYY HH:mm:ss'):null
        }
        if(this.state.airspaceCategory.id){
            this.props.updateAirspaceCategory(this.state.airspaceCategory.id, formData);
        } else{
            this.props.saveAirspaceCategory(formData);
        }
    }

    render() {
        const { savingAirspaceCategory, savedAirspaceCategory, errors} = this.props;
        const { formErrors, submitted, airspaceCategory, tempAirspace} = this.state;
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
                                    <label>Minimum height AGL(Above Ground Level) in ft above which this Airspace category is applicable
                                        <input type="number" placeholder="minAltitude" name="minAltitude" onChange={this.handleChange} value={airspaceCategory.minAltitude} className={decorateInputClass(this.state.fieldErrors['minAltitude'],[])} validate="required" onBlur={(e) => this.setState({fieldErrors: validateField(this.state.fieldErrors, e.target)})} />
                                    </label>
                                </div>
                                {/* todo: the aleready present data is not showing up, fix it */}
                                <div className="large-12 cell">
                                    <label> Is it a temporary airspace
                                        <select value={tempAirspace} onChange={this.toggle}>
                                            <option value={true}>Yes</option>
                                            <option value={false}>No</option>
                                        </select>
                                    </label>
                                </div>
                                { tempAirspace &&
                                <div className="large-12 cell">
                                    <label>Temporary zone begin date-time                                    
                                        <DatePicker
                                        selected={airspaceCategory.tempStartTime}
                                        onChange={this.handleChangeTempStartTime}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={5}
                                        dateFormat="DD-MM-YYYY HH:mm:00"
                                        timeCaption="time"
                                        minDate={moment()}
                                        maxDate={moment().add(1,"years")}
                                    />
                                    </label>
                                </div>
                                }
                                { tempAirspace &&
                                <div className="large-12 cell">
                                    <label>Temporary zone end date-time                                        
                                        <DatePicker
                                        selected={airspaceCategory.tempEndTime}
                                        onChange={this.handleChangeTempEndTime}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={5}
                                        dateFormat="DD-MM-YYYY HH:mm:00"
                                        timeCaption="time"
                                        minDate={moment()}
                                        maxDate={moment().add(1,"years")}
                                    />
                                    </label>
                                </div>
                                }
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