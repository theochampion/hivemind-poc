import React, { Component } from "react";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geodata from "../data/hives.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmV0cm9ib3RpYyIsImEiOiJjamU4a2xoaG8wcHI2MnhtenJqaWxzd2dtIn0.xIBjrkrzz9_vpFeAvO37hw";

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default class Map extends React.Component {
  playback(index) {
    // title.textContent = locations[index].title;
    //description.textContent = locations[index].description;

    console.log("flyto", geodata.features[index].geometry.coordinates);
    this.map.flyTo({
      center: geodata.features[index].geometry.coordinates,
      zoom: 15,
      curve: 4,
      speed: 0.3
    });

    this.map.once("moveend", () => {
      this.props.onHiveChange({
        name: geodata.features[index].properties.name,
        members: getRandomInt(30)
      });
      setTimeout(() => {
        index = index + 1 === geodata.length ? 0 : index + 1;
        this.playback(index);
      }, 4000);
    });
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v9",
      center: this.props.startPos || [2.3412, 48.8575],
      zoom: this.props.startPos ? 15 : 11
    });

    this.map.on("load", () => {
      this.map.addSource("hives", {
        type: "geojson",
        data: geodata,
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50
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
          "circle-radius": 10,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff"
        }
      });
    });
    this.props.animate && this.playback(0);
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
