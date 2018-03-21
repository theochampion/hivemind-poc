import React, { Component } from "react";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geodata from "../data/hives.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmV0cm9ib3RpYyIsImEiOiJjamU4a2xoaG8wcHI2MnhtenJqaWxzd2dtIn0.xIBjrkrzz9_vpFeAvO37hw";

export default class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v9",
      center: this.props.startPos || [2.3412, 48.8575],
      zoom: this.props.startPos ? 15 : 11
    });

    this.map.on("load", () => {
      this.map.addSource("hives", {
        type: "geojson",
        data: geodata,
        cluster: true,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
      });

      this.map.addLayer({
        id: "clusters",
        type: "circle",
        source: "hives",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1"
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40
          ]
        }
      });

      this.map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "hives",
        filter: ["has", "point_count"],
        layout: {
          "text-field": "{point_count_abbreviated}",
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12
        }
      });

      this.map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "hives",
        filter: ["!has", "point_count"],
        paint: {
          "circle-color": "#11b4da",
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff"
        }
      });
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div style={this.props.style} ref={el => (this.mapContainer = el)} />
    );
  }
}
