
import React from 'react';
import { connect } from 'react-redux'
import { loadUserAirspaceCategoriesAction } from '../actions/userAirspaceCategoryActions';

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


class MapViewPage extends React.Component {
    constructor(props) {
        super(props);
        this.loadAirspaceCategories();
        this.state = {
        };
    }

    loadAirspaceCategories() {
        return this.props.dispatch(loadUserAirspaceCategoriesAction());
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

        var map = new Map({
            target: this.refs.mapContainer,
            layers: [ new Tile({ source: new OSM({
                    url: 'https://{a-c}.tiles.mapbox.com/v4/openstreetmap.1b68f018/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiaXNwaXJ0IiwiYSI6ImNqcGFwb2l1czJmcmIzdmxrdzh6MGlncnkifQ.xZwKoTjwoXFROqKRPYmDwA'
                })}), greenLayer, amberLayer, redLayer],
            controls: defaultControls({
                attributionOptions: {
                    collapsible: false
                }
            }),
            view: new View({ center: fromLonLat([79.08060, 22.14980]), zoom: 5})
        });

        this.setState({  map: map});
    }

    render() {
        const { application } = this.props;
        return(
            <div className="map-wrapper">
                <div id="map" ref="mapContainer" className="map"> </div>
            </div>
        );
    }
}

function mapStateToProps(state) {    
    const { airspaceCategories } = state.userAirspaceCategory;
    return {
       airspaceCategories
    };
}

export default connect(
 mapStateToProps
)(MapViewPage)