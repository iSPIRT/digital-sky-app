import React from "react";
import { Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import GeoJSON from "ol/format/GeoJSON";
import { Fill, Stroke, Style } from "ol/style";
import { fromLonLat } from "ol/proj";
import Map from "ol/Map";
import Tile from "ol/layer/Tile";
import { defaults as defaultControls } from "ol/control/util";
import View from "ol/View";
import Modal from "@bit/react-bootstrap.react-bootstrap.modal";

class VerticallyCenteredModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingDone: false
    };
  }

  componentDidUpdate() {
    if (this.props.application && !this.state.loadingDone) {
      this.setState({ loadingDone: true });
      this.props.loadAirspaceCategories(this.props.application);
    }
    if (this.props.airspaceCategories.empty || this.state.map) return;

    var greenAirspaceCategories = this.props.airspaceCategories.greenCategories;
    var amberAirspaceCategories = this.props.airspaceCategories.amberCategories;
    var redAirspaceCategories = this.props.airspaceCategories.redCategories;

    var greenLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(greenAirspaceCategories)
      }),
      style: new Style({ stroke: new Stroke({ color: "green", width: 1 }) })
    });

    var amberLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(amberAirspaceCategories)
      }),
      style: new Style({
        stroke: new Stroke({ color: "yellow", width: 1 }),
        fill: new Fill({ color: "rgba(255, 255, 0, 0.1)" })
      })
    });

    var redLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(redAirspaceCategories)
      }),
      style: new Style({
        stroke: new Stroke({ color: "red", width: 1 }),
        fill: new Fill({ color: "rgba(204, 0, 0, 0.1)" })
      })
    });

    const coordinates = this.props.application.flyArea.map(coordinate =>
      fromLonLat([coordinate.longitude, coordinate.latitude])
    );

    var permission = {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [coordinates]
      }
    };

    var permissionLayer = new VectorLayer({
      source: new VectorSource({
        features: new GeoJSON().readFeatures(permission)
      }),
      style: new Style({
        stroke: new Stroke({ color: "blue", width: 1 }),
        fill: new Fill({ color: "rgba(101, 141, 242, 0.1)" })
      })
    });

    var map = new Map({
      target: this.refs.mapContainer,
      layers: [
        new Tile({
          source: new OSM({
            url:
              "https://{a-c}.tiles.mapbox.com/v4/openstreetmap.1b68f018/{z}/{x}/{y}.png?access_token=sk.eyJ1IjoiaXNwaXJ0IiwiYSI6ImNqcGFwb2l1czJmcmIzdmxrdzh6MGlncnkifQ.xZwKoTjwoXFROqKRPYmDwA"
          })
        }),
        greenLayer,
        amberLayer,
        redLayer,
        permissionLayer
      ],
      controls: defaultControls({
        attributionOptions: {
          collapsible: false
        }
      }),
      view: new View({ center: coordinates[0], zoom: 15 })
    });

    this.setState({ map: map });
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
        <Modal.Header>
          <div>
            <Modal.Title>Launch Point</Modal.Title>
            <div ref="mapContainer" className="map" />
          </div>
        </Modal.Header>
        <Modal.Footer>
          <button class="button" onClick={this.props.onHide}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default VerticallyCenteredModal;
