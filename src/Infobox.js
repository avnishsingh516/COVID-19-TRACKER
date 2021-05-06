import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Infobox.css";
import numeral from "numeral";

function Infobox({ title, cases, total, onClick, active, caseType, updated }) {
  // console.log("cases ", cases);
  return (
    <div
      onClick={onClick}
      className={`infobox ${active && "infobox__active"} ${caseType}`}
    >
      <Card>
        <CardContent>
          <Typography className="infobox__title" color="textSecondary">
            <h3>{title}</h3>
          </Typography>
          <h2 className="infobox__cases">{numeral(total).format("0.0a")}</h2>
          <Typography className="infobox__total" color="textSecondary">
            <h5>
              <i>
                {cases
                  ? cases > 0
                    ? "+" + numeral(cases).format("0.0a")
                    : "+0"
                  : "+0"}
                {"  "}
              </i>
              Today
            </h5>
          </Typography>
          {/* <Typography className="infobox__updated" color="textSecondary">
            {new Date(updated).toLocaleString()}
          </Typography> */}
        </CardContent>
      </Card>
    </div>
  );
}

export default Infobox;
