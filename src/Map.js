import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showCirclesOnMap } from "./util.js";
import { Typography } from "@material-ui/core";

function Map({ center, zoom, countries, caseType, updated }) {
  return (
    <div className="map">
      <h2>COVID-19 CASES</h2>
      <Typography
        className="infobox__updated"
        color="textSecondary"
        align="right"
      >
        Last updated: {new Date(updated).toLocaleString()}
      </Typography>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        {countries.length && showCirclesOnMap(countries, caseType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
