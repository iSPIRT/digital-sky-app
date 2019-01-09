import React from 'react';

import { Link } from 'react-router-dom'

import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import { Fill, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import {Vector as VectorLayer} from 'ol/layer'
import {defaults as defaultControls} from 'ol/control';
import {fromLonLat} from 'ol/proj';

require('ol/ol.css');

class FlyDronePermissionApplicationView extends React.Component {

    constructor(props) {
        super(props);
        this.props.loadAirspaceCategories(this.props.application);
        this.state = {
        };
    }

    componentDidUpdate() {

        if(this.props.airspaceCategories.empty || this.state.map) return;

        var greenAirspaceCategories = this.props.airspaceCategories.greenCategories;
        var amberAirspaceCategories = this.props.airspaceCategories.amberCategories;
        var redAirspaceCategories = this.props.airspaceCategories.redCategories;

        var greenLayer = new VectorLayer({
            source: new VectorSource({ features: (new GeoJSON()).readFeatures(greenAirspaceCategories)}),
            style: new Style({ stroke: new Stroke({ color: 'green',width: 1})})
        });

        var amberLayer = new VectorLayer({
            source: new VectorSource({ features: (new GeoJSON()).readFeatures(amberAirspaceCategories)}),
            style: new Style({
                stroke: new Stroke({ color: 'yellow',width: 1}),
                fill: new Fill({ color: 'rgba(255, 255, 0, 0.1)'})
            })
        });

        var redLayer = new VectorLayer({
            source: new VectorSource({ features: (new GeoJSON()).readFeatures(redAirspaceCategories)}),
            style: new Style({
                stroke: new Stroke({ color: 'red',width: 1}),
                fill: new Fill({ color: 'rgba(204, 0, 0, 0.1)'})
            })
        });

        const coordinates = this.props.application.flyArea.map(coordinate => fromLonLat([coordinate.longitude, coordinate.latitude]));
        var permission = {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                'coordinates': [
                   coordinates
                ]
            }
        };

        var permissionLayer = new VectorLayer({
            source: new VectorSource({ features: (new GeoJSON()).readFeatures(permission)}),
            style: new Style({
                stroke: new Stroke({ color: 'blue',width: 1}),
                fill: new Fill({ color: 'rgba(101, 141, 242, 0.1)'})
            })
        });

        var map = new Map({
            target: this.refs.mapContainer,
            layers: [ new Tile({ source: new OSM({
                    url: 'https://{a-c}.tiles.mapbox.com/v4/openstreetmap.1b68f018/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiaXNwaXJ0IiwiYSI6ImNqcGFwb2l1czJmcmIzdmxrdzh6MGlncnkifQ.xZwKoTjwoXFROqKRPYmDwA'
                })}), greenLayer, amberLayer, redLayer, permissionLayer],
            controls: defaultControls({
                attributionOptions: {
                    collapsible: false
                }
            }),
            view: new View({ center: coordinates[0], zoom: 12})
        });

        this.setState({  map: map});
    }


    render() {
        const { application } = this.props;
        return (
            <div className="large-12 cell">
                <div className="question">
                    <h6>Application Status:</h6>
                    <p>{application.status}</p>
                </div>
                <div className="question">
                    <h6>Pilot Id:</h6>
                    <p>
                        <Link to={ "/admin/pilot?profileId="+application.pilotId } >{application.pilotBusinessIdentifier}</Link>
                    </p>
                </div>
                <div className="question">
                    <h6>Operator Id:</h6>
                    <p>
                        <Link to={ "/admin/operator?profileId="+application.operatorId+"&profileType="+application.applicantType } >
                            {application.operatorId}
                        </Link>
                    </p>
                </div>
                <div className="question">
                    <h6>Drone Id:</h6>
                    <p>{application.droneId}</p>
                </div>
                <div className="question">
                    <h6>Start Date and Time:</h6>
                    <p>{application.startDateTime}</p>
                </div>
                <div className="question">
                    <h6>End Date and Time:</h6>
                    <p>{application.endDateTime}</p>
                </div>
                <div className="question">
                    <h6>Recurrence Time Pattern (Cron Quartz Expression):</h6>
                    <p>{application.recurringTimeExpression}</p>
                </div>
                <div className="question">
                    <h6>Duration In Minutes :</h6>
                    <p>{application.recurringTimeDurationInMinutes}</p>
                </div>
                <div className="question">
                    <h6>Payload Wight In Kgs:</h6>
                    <p>{application.payloadWeightInKg}</p>
                </div>
                <div className="question">
                    <h6>Payload Details:</h6>
                    <p>{application.payloadDetails}</p>
                </div>
                <div className="question">
                    <h6>Purpose of Flight:</h6>
                    <p>{application.flightPurpose}</p>
                </div>
                <div className="question">
                    <h6>Max altitude AGL in ft:</h6>
                    <p>{application.maxAltitude}</p>
                </div>
                { application.approverComments &&
                <div className="question">
                    <h6>Comments:</h6>
                    <p>{application.approverComments}</p>
                </div>
                }
                <div className="question">
                    <h6>Fly Area:</h6>
                    <div ref="mapContainer" className="map"> </div>
                </div>
            </div>
        );
    }
}

export default FlyDronePermissionApplicationView;