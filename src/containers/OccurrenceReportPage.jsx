import React from 'react';

import { connect } from 'react-redux';

import queryString from 'query-string'

import { history } from '../store/configureStore';

import OccurrenceReport from '../components/OccurrenceReport';

import OccurrenceReportView from '../components/OccurrenceReportView';

import OccurrenceReportList from '../components/OccurrenceReportList';

import { loadOccurrenceReportsAction, saveOccurrenceReportAction,  } from '../actions/occurrenceReportActions';


class OccurrenceReportPage extends React.Component {

    constructor(props) {
        super(props);
        this.saveOccurrenceReport = this.saveOccurrenceReport.bind(this);
        this.list = this.list.bind(this);
        this.viewReport = this.viewReport.bind(this);
        this.newReport = this.newReport.bind(this);
        const droneId = this.findDroneId();
        if(!droneId){
            history.push("/dashboard")
        }
        this.props.dispatch(loadOccurrenceReportsAction(droneId));
        this.state = {
            droneId,
            selectedReport: 0,
            viewState: 'list'
        }
    }

    findDroneId(){
        const queryParams = queryString.parse(this.props.location.search)
        return parseInt(queryParams.droneId, 10);
    }

    saveOccurrenceReport(occurrenceReport){
        this.props.dispatch(saveOccurrenceReportAction(occurrenceReport));
    }

    list(){
        this.setState({viewState: 'list'})
    }

    viewReport(id){
        this.setState({viewState: 'view'})
        this.setState({selectedReport: id})
    }

    newReport(){
        this.setState({viewState: 'create'})
    }


    render() {
        const { errors, occurrenceReports, savedOccurrenceReports} = this.props;
        const { viewState, selectedReport, droneId } = this.state;
        if(viewState === 'view' ){
            const occurrenceReport =  occurrenceReports.find( o => o.id === selectedReport )
            if(occurrenceReport){
                return <OccurrenceReportView occurrenceReport={occurrenceReport} list={this.list}/>
            }
        } else if(viewState === 'create'){
            return <OccurrenceReport list={this.list} saveOccurrenceReport={this.saveOccurrenceReport} errors={errors} savedOccurrenceReports={savedOccurrenceReports} droneId={droneId}/>
        }
        return <OccurrenceReportList occurrenceReports={occurrenceReports} viewReport={this.viewReport} newReport={this.newReport} />
    }
}

function mapStateToProps(state) {
     const { errors, occurrenceReports, savedOccurrenceReports } = state.occurrenceReport;
     return {
        savedOccurrenceReports,
        occurrenceReports,
        errors
     };
}

export default connect(
  mapStateToProps
)(OccurrenceReportPage)