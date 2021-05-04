import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";
import { tooltip } from "leaflet";

export const sortData = (data) => {
  const sortedData = [...data];

  return sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

const caseTypeColors = {
  cases: {
    color: "#cc1034",
    multiplier: 800,
  },
  recovered: {
    color: "#7dd71d",
    multiplier: 800,
  },
  active: {
    color: "#1769aa",
    multiplier: 800,
  },
  deaths: {
    color: "#333",
    multiplier: 1200,
  },
};

// Draw circles on the map with interactive tooltip
export const showCirclesOnMap = (data, caseType = "cases") => {
  if (data) {
    caseType = caseType === "activecase" ? "active" : caseType;
    let circles = data.map((country) => (
      <Circle
        center={[
          country.countryInfo ? country.countryInfo.lat : 20,
          country.countryInfo ? country.countryInfo.long : 70,
        ]}
        fillOpacity={0.4}
        fillColor={caseTypeColors[caseType].color}
        color={caseTypeColors[caseType].color}
        radius={
          Math.sqrt(country[caseType] / 10) *
          caseTypeColors[caseType].multiplier
        }
      >
        <Popup>
          <div className="info-container">
            <div
              className="info-flag"
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            ></div>
            <div className="info-name">{country.country}</div>
            <div className="info-cases">
              Cases : {numeral(country["cases"]).format("0,0")}
            </div>
            <div className="info-activecase">
              Active : {numeral(country["active"]).format("0,0")}
            </div>
            <div className="info-recovered">
              Recovered : {numeral(country["recovered"]).format("0,0")}
            </div>
            <div className="info-deaths">
              Deaths : {numeral(country["deaths"]).format("0,0")}
            </div>
          </div>
        </Popup>
      </Circle>
    ));
    return circles;
  }
};
