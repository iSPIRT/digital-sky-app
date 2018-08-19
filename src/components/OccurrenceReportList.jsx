import React from 'react';

import FormErrors from '../components/FormErrors';

import { Link } from 'react-router-dom'

class OccurrenceReportList extends React.Component {

    constructor(props) {
        super(props);
        this.viewReport = this.viewReport.bind(this);
        this.newReport = this.newReport.bind(this);
    }

    viewReport(id, event) {
        event.preventDefault();
        this.props.viewReport(id);
    }

    newReport(event) {
        event.preventDefault();
        this.props.newReport();
    }

    blogListMarkup(blogList){
        return blogList.map((blog) => {
            return <p><Link to={'/admin/blog?id='+blog.id}>{blog.title}</Link><br/></p>
        });
    }

    occurrenceReportListMarkup(occurrenceReports){
        return occurrenceReports.map((occurrenceReport) => {
            return <p><Link to="#" onClick={(e) =>  this.viewReport(occurrenceReport.id, e)}>{occurrenceReport.occurrenceTimestamp}</Link><br/></p>
        });
    }

    render() {
        const { errors, occurrenceReports } = this.props;
        return (
            <div>
                <div className="page-header">
                  <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                      <div className="large-12 cell">
                        <h2>Occurrence Reports</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-dashboard">
                    <div className="grid-container">
                        <div className="grid-x grid-padding-x">
                            <div className="large-12 cell">
                                <br/>
                                <br/>
                                <Link to="#" onClick={this.newReport} className="button button-accept">New Report</Link>
                                <br/>
                            </div>
                            <div className="large-12 cell">
                                <FormErrors errors = {errors}/>
                                {this.occurrenceReportListMarkup(occurrenceReports)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OccurrenceReportList;