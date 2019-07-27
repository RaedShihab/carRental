import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
      carDetails: "",
      obj: {
        lat: -1.2884,
        lng: 36.8233
      }
    };
  }

  getId() {
    this.setState(
      {
        carDetails: this.props.history.location.state.res
      },
      () =>
        console.log(
          typeof this.state.carDetails.companyLocationLong,
          "location here"
        )
    );
  }
  componentWillMount() {
    this.getId();
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const latt = parseFloat(this.state.carDetails.companyLocationLat);
    const lngg = parseFloat(this.state.carDetails.companyLocationLong);
    console.log(latt, lngg, "here");
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        // initialCenter={{ lat: parseFloat (this.state.carDetails.companyLocationLat), lng: parseFloat(this.state.carDetails.companyLocationLong) }}
        initialCenter={{
          lat: latt,
          lng: lngg
        }}
        // initialCenter={{
        //   lat: -1.2884,
        //   lng: 36.8233
        //  } }
      >
        <Marker onClick={this.onMarkerClick} name={"Khalda Altqwa mosque"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDN8t7e81boYUB8xVRQJCfgAtnC9a6jZPk  "
})(MapContainer);
