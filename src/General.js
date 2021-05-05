import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./General.css";
import Symptoms from "./Symptoms";

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
    <div className="btn-dark btn">
      <Symptoms />
      <Button
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleClickOpen("paper")}
      >
        COVID-19 Precautions
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          COVID Preventions & Treatments
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* <!-- Modal --> */}
            <div class="modal-body">
              <div class="card mb-3 covid-prevention">
                <img
                  src="https://i.pinimg.com/originals/f8/b1/29/f8b12901ffd51b9794669dc8a66db08c.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Covid Prevention</h5>
                  <h5>STAY HOME. SAVE LIFES.</h5>
                  <h6>Help stop coronavirus</h6>
                  <ol id="order-list">
                    <li>
                      <span class="list-cont">STAY</span> home
                    </li>
                    <li>
                      <span class="list-cont">KEEP</span> a safe distance
                    </li>
                    <li>
                      <span class="list-cont">WASH</span> hands often
                    </li>
                    <li>
                      <span class="list-cont">COVER</span> your cough
                    </li>
                    <li>
                      <span class="list-cont">SICK?</span> Call the helpline
                    </li>
                  </ol>
                  <p class="card-text">
                    Protect yourself and others around you by knowing the facts
                    and taking appropriate precautions. Follow advice provided
                    by your local health authority.
                  </p>

                  <h5 class="card-title">Covid Treatments</h5>
                  <p class="card-text">
                    To date, there are no specific vaccines or medicines for
                    COVID-19. Treatments are under investigation, and will be
                    tested through clinical trials.{" "}
                    <a href="https://www.who.int/">World Health Organization</a>
                  </p>

                  <h5 class="card-title">Self-care</h5>
                  <p class="card-text">
                    If you feel sick you should rest, drink plenty of fluid, and
                    eat nutritious food. Stay in a separate room from other
                    family members, and use a dedicated bathroom if possible.
                    Clean and disinfect frequently touched surfaces.
                  </p>
                  <p class="card-text">
                    Everyone should keep a healthy lifestyle at home. Maintain a
                    healthy diet, sleep, stay active, and make social contact
                    with loved ones through the phone or internet. Children need
                    extra love and attention from adults during difficult times.
                    Keep to regular routines and schedules as much as possible.
                  </p>

                  <h5 class="card-title">Medical Treatments</h5>
                  <p class="card-text">
                    If you have mild symptoms and are otherwise healthy,
                    self-isolate and contact your medical provider or a COVID-19
                    information line for advice.
                  </p>
                  <p class="card-text">
                    Seek medical care if you have a fever, a cough, and
                    difficulty breathing. Call in advance.
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

      <br></br>

      <Button
        variant="contained"
        color="default"
        size="medium"
        href="https://twitter.com/i/events/1385596085192691712"
      >
        COVID-19 Resources
      </Button>
    </div>
  );
}
