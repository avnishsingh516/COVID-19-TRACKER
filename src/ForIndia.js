import React from "react";
import Button from "@material-ui/core/Button";
import "./General.css";

export default function ForIndia() {
  return (
    <div className=" btn">
      <h4> COVID-19 Resources For India !</h4>
      <br />
      <h4> Statewise Covid-19 resources are available. </h4>
      <br />
      <br />

      <Button
        variant="contained"
        color="primary"
        size="large"
        href="https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/1?id=DASHBOARD_601b9e214c7a6b689d76f493&tabId=1&home=1"
      >
        Visit HERE
      </Button>
    </div>
  );
}
