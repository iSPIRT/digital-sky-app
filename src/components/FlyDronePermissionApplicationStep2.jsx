import React from 'react';

import FormErrors from './FormErrors';

import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import { Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import GeoJSON from 'ol/format/GeoJSON';
import {Vector as VectorLayer} from 'ol/layer'
import {defaults as defaultControls} from 'ol/control';
import {fromLonLat, toLonLat} from 'ol/proj';
import {Draw, Modify, Snap} from 'ol/interaction';

import Geocoder from 'ol-geocoder';

require('ol/ol.css');

require ('../css/ol-geocoder.css');

class FlyDronePermissionApplicationStep2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleSaveApplication = this.handleSaveApplication.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateObjProp = this.updateObjProp.bind(this);
        this.startDraw = this.startDraw.bind(this);
        this.endDraw = this.endDraw.bind(this);
        this.resetDraw = this.resetDraw.bind(this);
        this.handleDraw = this.handleDraw.bind(this);
        this.handleModifyDraw = this.handleModifyDraw.bind(this);
        this.addressChosen = this.addressChosen.bind(this);

        this.state = {
            submitted: false,
            formErrors:[],
            application: this.props.application,
        };
        this.props.loadAirspaceCategories(this.state.application);
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

        var featuresFull = (new GeoJSON()).readFeatures(redAirspaceCategories)
        var featuresOne = featuresFull
        var featuresTwo = featuresOne.splice(0, Math.ceil(featuresOne.length / 2))
        var redLayer = new VectorLayer({
            source: new VectorSource({ features: featuresOne}),
            style: new Style({
                stroke: new Stroke({ color: 'red',width: 1}),
                fill: new Fill({ color: 'rgba(204, 0, 0, 0.1)'})
            })
        });
        
        var redLayer2 = new VectorLayer({
            source: new VectorSource({ features: featuresTwo}),
            style: new Style({
                stroke: new Stroke({ color: 'red',width: 1}),
                fill: new Fill({ color: 'rgba(204, 0, 0, 0.1)'})
            })
        });
        var geoCoder = new Geocoder('nominatim', {
            provider: 'osm',
            lang: 'en',
            placeholder: 'Search for ...',
            limit: 5,
            debug: false,
            autoComplete: true,
            targetType: 'text-input',
            countrycodes: 'in',
            preventDefault: true,
            keepOpen: false
        });



        var map = new Map({
            target: this.refs.mapContainer,
            layers: [ new Tile({ source: new OSM({
                    url: 'https://{a-c}.tiles.mapbox.com/v4/openstreetmap.1b68f018/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiaXNwaXJ0IiwiYSI6ImNqcGFwb2l1czJmcmIzdmxrdzh6MGlncnkifQ.xZwKoTjwoXFROqKRPYmDwA'
                })}), greenLayer, amberLayer, redLayer, redLayer2],
            controls: defaultControls({
                attributionOptions: {
                    collapsible: false
                }
            }),
            view: new View({ center: fromLonLat([79.08060, 22.14980]), zoom: 4})
        });

        geoCoder.on('addresschosen', this.addressChosen);
        map.addControl(geoCoder);

        if(this.props.application.flyArea && this.props.application.flyArea.length > 0){
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

            map.addLayer(permissionLayer);
            map.setView(new View({ center: coordinates[0], zoom: 15}));
        }

        this.setState({  map: map});
    }

    addressChosen(event){
        this.state.map.setView(new View({ center: event.coordinate, zoom: 15}));
    }

    startDraw(event) {
        event.preventDefault();
        var vectorDrawSource = new VectorSource();

        var vectorDrawLayer = new VectorLayer({
            source: vectorDrawSource,
            style: new Style({
                fill: new Fill({
                    color: 'rgba(255, 255, 255, 0.2)'
                }),
                stroke: new Stroke({
                    color: '#ffcc33',
                    width: 2
                }),
                image: new CircleStyle({
                    radius: 7,
                    fill: new Fill({
                      color: '#ffcc33'
                    })
                })
            })
        });


        var modify = new Modify({source: vectorDrawSource});
        modify.on('modifyend',this.handleModifyDraw);

        const draw = new Draw({ source: vectorDrawSource, type: 'Polygon'});
        draw.on('drawend',this.handleDraw);

        const snap = new Snap({source: vectorDrawSource});

        this.state.map.addLayer(vectorDrawLayer);
        this.state.map.addInteraction(modify);
        this.state.map.addInteraction(draw);
        this.state.map.addInteraction(snap);

        this.setState({draw})
        this.setState({modify})
        this.setState({snap})
        this.setState({vectorDrawLayer})
    }

    endDraw(event){
        event.preventDefault();
        if(this.state.snap) this.state.map.removeInteraction(this.state.snap)
        if(this.state.draw) this.state.map.removeInteraction(this.state.draw)
        if(this.state.modify) this.state.map.removeInteraction(this.state.modify)
    }

    resetDraw(event){
        event.preventDefault();
        if(this.state.snap) this.state.map.removeInteraction(this.state.snap)
        if(this.state.draw) this.state.map.removeInteraction(this.state.draw)
        if(this.state.modify) this.state.map.removeInteraction(this.state.modify)
        if(this.state.vectorDrawLayer) this.state.map.removeLayer(this.state.vectorDrawLayer);
        this.setState({selectedArea: undefined});
    }

    handleDraw(event) {
         const lonLats = event.feature.getGeometry().getCoordinates()[0].map( coordinate => toLonLat(coordinate))
         const selectedArea = {
            id: event.feature.ol_uid,
            coordinates: lonLats
         }
         this.setState({selectedArea});
    }

    handleModifyDraw(event) {
         var selectedArea = this.state.selectedArea;
         event.features.forEach((feature)=> {
             if(feature.ol_uid === selectedArea.id)  {
                const lonLats = feature.getGeometry().getCoordinates()[0].map( coordinate => toLonLat(coordinate))
                selectedArea.coordinates = lonLats;
             }
             this.setState({selectedArea});
        });
    }

    componentWillReceiveProps(nextProps){
        const { application, errors, savingApplication } = nextProps;
        const {submitted } = this.state;
        if (submitted && ( !errors || errors.length === 0)  &&  (application.id !== 0) && !savingApplication){
            this.props.nextStep();
        }
        if(errors && errors.length > 0){
            this.setState({submitted: false});
        }
        const currentApplication = this.state.application;
        currentApplication.id = application.id;
        this.setState({application: currentApplication});
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { application } = this.state;
        this.updateObjProp(application, value, name);
        this.setState({application: application});
    }

    updateObjProp(obj, value, propPath) {
        const [head, ...rest] = propPath.split('.');

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], value, rest.join("."));
    }

    handleSaveApplication(event) {
        event.preventDefault();
        const formErrors = [];
        if(!this.state.selectedArea || !this.state.selectedArea.coordinates){
            if( !this.state.application.flyArea || this.state.application.flyArea.length === 0 ){
                formErrors.push("Please select fly area") ;
            }
        }
        this.setState({formErrors});
        if( formErrors.length > 0 ) return;

        const { application } = this.state;
        this.setState({submitted: true});
        if(this.state.selectedArea){
            const flyArea = this.state.selectedArea.coordinates.map(coordinate => {
                return {'longitude': coordinate[0], 'latitude': coordinate[1]}
            });
            application.flyArea = flyArea;
        }
        this.props.updateApplication(this.props.application.id, application);
    }

    render() {
        const { errors} = this.props;
        const { formErrors } = this.state;
        return (
            <form name="uaopApplicationForm" onSubmit={this.handleSaveApplication}>
                <FormErrors errors = {formErrors}/>
                <FormErrors errors = {errors}/>
                <div id="permission-map">
                    <div className="map-wrapper">
                        <div id="map" ref="mapContainer" className="map"> </div>
                    </div>
                    <div className="permission-navigation">
                        <div className="wrap">
                          <a className="button button-light-clean" onClick={this.startDraw}>Start Draw</a>
                          <a className="button button-light-clean" onClick={this.endDraw}>Finish Draw</a>
                          <a className="button button-light-clean" onClick={this.resetDraw}>Reset Draw</a>
                          <a onClick={this.props.previousStep} className="button button-light back">back</a>
                          <button type="submit" className="button" name="button">Save & Continue</button>
                        </div>
                    </div>
                </div>
                <style media="screen">
                        {".site-footer {display: none;}"}
                </style>
            </form>
        );
    }
}

export default FlyDronePermissionApplicationStep2;