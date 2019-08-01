import React from 'react';
import {connect} from 'react-redux'
import {loadUserAirspaceCategoriesByHeightAction} from '../actions/userAirspaceCategoryActions';

import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import {Fill, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import {Vector as VectorLayer} from 'ol/layer'
import {defaults as defaultControls} from 'ol/control';
import {fromLonLat} from 'ol/proj';
import queryString from "query-string";
import {Link} from "react-router-dom";

require('ol/ol.css');


class MapViewPage extends React.Component {
    constructor(props) {
        super(props);
        const queryParams = queryString.parse(this.props.location.search);
        this.state = {
            application: {},
            applicationType:queryParams.type
        };
    }

    componentDidUpdate() {
        const queryParams = queryString.parse(this.props.location.search);
        const applications = this.props.adminApplications[queryParams.type];
        if(!applications || applications.length === 0) return ;
        const currentApplication =  applications.find( application => application.id === queryParams.id );

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

        const coordinates = currentApplication.flyArea.map(coordinate => fromLonLat([coordinate.longitude, coordinate.latitude]));
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
        return(
            <div id="application-preview">
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <Link to={'/admin/dashboard?type='+this.state.applicationType}>Back</Link>
                            <div className="question">
                                <h3>Launch Point:</h3>
                                <div id="map" ref="mapContainer" className="map-display"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { adminApplications } = state;
    const { airspaceCategories } = state.userAirspaceCategory;
    return {
        adminApplications,
        airspaceCategories
    };
}

export default connect(
 mapStateToProps
)(MapViewPage)