import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./General.css";

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div className="btn">
      <img
        src="https://niro7.github.io/covid19-challenge/images/StaySafe.png"
        height="180"
        width="180"
      />
      <br />

      <Button
        variant="contained"
        color="secondary"
        size="medium"
        onClick={handleClickOpen("paper")}
      >
        COVID-19 Symptoms
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Covid Symptoms</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* <!-- Modal --> */}

            <div class="modal-body">
              <div class="card mb-3 covid-symptoms-card">
                <div class="covid-card-images">
                  <div>
                    <img
                      src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_fever.gif"
                      class="card-img"
                      height="70"
                      width="55"
                      alt="..."
                    />
                    <h5 id="fever">Fever</h5>
                  </div>
                  <div>
                    <img
                      src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_cough.gif"
                      class="card-img"
                      height="70"
                      width="55"
                      alt="..."
                    />
                    <h5>Dry cough</h5>
                  </div>
                  <div>
                    <img
                      src="https://www.gstatic.com/healthricherkp/covidsymptoms/light_tiredness.gif"
                      class="card-img"
                      height="70"
                      width="55"
                      alt="..."
                    />
                    <h5>Tiredness</h5>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Covid Symptoms</h5>
                  <p class="card-text">
                    COVID-19 affects different people in different ways. Most
                    infected people will develop mild to moderate illness and
                    recover without hospitalization.
                  </p>
                  <p class="card-text symptoms">
                    <small class="text-muted">Most common symptoms:</small>
                  </p>
                  <ul class="text-muted">
                    <li>fever</li>
                    <li>dry cough</li>
                    <li>tiredness</li>
                  </ul>
                  <p class="card-text symptoms">
                    <small class="text-muted">Less common symptoms:</small>
                  </p>
                  <ul class="text-muted">
                    <li>aches and pains</li>
                    <li>sore throat</li>
                    <li>headache</li>
                    <li>
                      a rash on skin, or discolouration of fingers or toes
                    </li>
                  </ul>
                  <p class="card-text symptoms">
                    <small class="text-muted">Serious symptoms:</small>
                  </p>
                  <ul class="text-muted">
                    <li>difficulty breathing or shortness of breath</li>
                    <li>chest pain or pressure</li>
                    <li>loss of speech or movement</li>
                  </ul>
                  <p class="card-text">
                    Seek immediate medical attention if you have serious
                    symptoms. Always call before visiting your doctor or health
                    facility.
                  </p>
                  <p class="card-text">
                    People with mild symptoms who are otherwise healthy should
                    manage their symptoms at home.
                  </p>
                  <p class="card-text">
                    On average it takes 5–6 days from when someone is infected
                    with the virus for symptoms to show, however it can take up
                    to 14 days.
                  </p>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Understood
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
