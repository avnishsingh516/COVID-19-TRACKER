import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YYYY",
          tooptipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};
const constructChartData = (data, caseType = "cases") => {
  let chartData = [];
  let lastDataPoint;

  for (let date in data[caseType]) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[caseType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[caseType][date];
  }
  // console.log("chartData ", chartData);
  return chartData;
};
const generateActiveCases = (data) => {
  let active = {};
  for (let date in data["cases"]) {
    active[date] =
      data["cases"][date] - data["recovered"][date] - data["deaths"][date];
  }
  return active;
};
function Linegraph({ caseTypes = "cases" }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=100")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (caseTypes === "activecase") {
            let activeCases = generateActiveCases(data);
            data["active"] = activeCases;
            // console.log("active ", data);
            caseTypes = "active";
            // return;
          }
          setData(constructChartData(data, caseTypes));
        });
    };
    fetchData();
  }, [caseTypes]);
  const lineGraphColor = {
    cases: {
      borderColor: "#cc1034",
      backgroundColor: "rgba(204, 16, 52, 0.5)",
    },
    recovered: {
      borderColor: "#7dd71d",
      backgroundColor: "#c3e59d",
    },
    activecase: {
      borderColor: "#1769aa",
      backgroundColor: "#4dabf5",
    },
    deaths: {
      borderColor: "#333",
      backgroundColor: "#999",
    },
  };

  return (
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                borderColor: { caseTypes }
                  ? lineGraphColor[caseTypes].borderColor
                  : "#cc1034",
                backgroundColor: { caseTypes }
                  ? lineGraphColor[caseTypes].backgroundColor
                  : "rgba(204, 16, 52, 0.5)",
                data: data,
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default Linegraph;
