import React, { Component } from "react";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmV0cm9ib3RpYyIsImEiOiJjamU4a2xoaG8wcHI2MnhtenJqaWxzd2dtIn0.xIBjrkrzz9_vpFeAvO37hw";

export default class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9"
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      height: "30em",
      width: "100%"
    };

    return <div style={style} ref={el => (this.mapContainer = el)} />;
  }
}
