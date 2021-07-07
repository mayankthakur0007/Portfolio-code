import "./RecentWork.css";
import Fade from "react-reveal/Fade";
import screenShare from "./images/screenShare.png";
import Adready from "./images/adready.png";
import { GitHub } from "@material-ui/icons";
import Flight from "./images/flight.png";
import Helpinghand from "./images/hekpinghand.png";
import Hungerbox from "./images/hungerbox.png";
import { Typography, IconButton } from "@material-ui/core";
import Onboarding from "./images/onboarding.png";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
const RecentWork = () => {
  return (
    <div className="recentContainer">
      <Fade bottom>
        <div className="heading">
          <h1>Recent Work</h1>
        </div>
      </Fade>
      <div className="workBoxes">
        <div className="card">
          <Fade left>
            <Card>
              <img
                src={screenShare}
                alt="screenshare"
                height="300"
                width="500"
              />
              <CardActions className="cardAction" disableSpacing>
                <div className="AppsName"><Typography>Screenshare</Typography></div>
                <div className="github" >
                <a href="https://github.com/mayankthakur0007/screenshare"><GitHub /></a>
                </div>
              </CardActions>
            </Card>
          </Fade>
        </div>
        <div className="card">
          <Fade left>
            <Card>
              <img src={Adready} alt="screenshare" height="300" width="500" />
            <CardActions className="cardAction" disableSpacing>
                <div className="AppsName"><Typography>Adready</Typography></div>
                <div className="github" >
                <a href="https://github.com/mayankthakur0007/AdReaddy"><GitHub /></a>
                </div>
              </CardActions>
            </Card>
          </Fade>
        </div>
        <div className="card">
          <Fade left>
            <Card>
              <img src={Flight} alt="screenshare" height="300" width="500" />
            <CardActions className="cardAction" disableSpacing>
                <div className="AppsName"><Typography>Flight Booking</Typography></div>
                <div className="github" >
                <a href="https://github.com/mayankthakur0007/flightBooking"><GitHub /></a>
                </div>
              </CardActions>
            </Card>
          </Fade>
        </div>
        <div className="card">
          <Fade right>
            <Card>
              <img
                src={Helpinghand}
                alt="screenshare"
                height="300"
                width="500"
              />
            <CardActions className="cardAction" disableSpacing>
                <div className="AppsName"><Typography>Helpinghand</Typography></div>
                <div className="github" >
                <a href="https://github.com/mayankthakur0007/DonateForCause"><GitHub /></a>
                </div>
              </CardActions>
            </Card>
          </Fade>
        </div>
        <div className="card">
          <Fade right>
            <Card>
              <img src={Hungerbox} alt="screenshare" height="300" width="500" />
            <CardActions className="cardAction" disableSpacing>
                <div className="AppsName"><Typography>Hungerbox</Typography></div>
                <div className="github" >
                <a href="https://github.com/mayankthakur0007/HungerBox"><GitHub /></a>
                </div>
              </CardActions>
            </Card>
          </Fade>
        </div>
        <div className="card">
          <Fade right>
            <Card>
              <img
                src={Onboarding}
                alt="screenshare"
                height="300"
                width="500"
              />
            <CardActions className="cardAction" disableSpacing>
            <div className="AppsName"><Typography>Onboarding App</Typography></div>
            <div className="github" >
                <a href="https://github.com/mayankthakur0007/Onboarding"><GitHub /></a>
                </div>
              </CardActions>
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
