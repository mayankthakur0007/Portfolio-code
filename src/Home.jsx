import "./Home.css";
import AboutMe from "./AboutMe";
import Recent from "./RecentWork";
import Tools from "./Tools";
import Contact from "./Contact";
import Intro from "./Intro";
import { Grow } from "@material-ui/core";
import "./Animation.css";
import MobileMenu from "./MobileMenu";
import { Drawer } from "@material-ui/core";
import { useState, useEffect } from "react";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Menu from "./Menu";

function Home() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (open) => () => {
    setState({ ...state, true: open });
  };

  const [iconC, chanceIconC] = useState(
    localStorage.getItem("mode") === "day" && localStorage.getItem("mode")
      ? "black"
      : "white"
  );
  const [day, changeIcon] = useState(
    localStorage.getItem("mode") === "day" ? true : false
  );
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "night"
  );
  const modeChange = () => {
    if (mode === "day") {
      setMode("night");
      localStorage.setItem("mode", "night");
      chanceIconC("white");
      changeIcon(false);
    } else {
      setMode("day");
      localStorage.setItem("mode", "day");
      changeIcon(true);
      chanceIconC("black");
    }
  };

  return (
    <div className="App">
      <div className="slide">
        <div id="home" className={mode}>
          <div className="menuIcon">
            <MenuRoundedIcon onClick={toggleDrawer(true)} />
          </div>
          <Drawer open={state[true]} onClose={toggleDrawer(false)}>
            <MobileMenu closeDrawer={toggleDrawer(false)} />
          </Drawer>
          <div>
          <Menu iconC={iconC}/>
          </div>
          <div className="mode">
            {day ? (
              <WbSunnyRoundedIcon onClick={modeChange}></WbSunnyRoundedIcon>
            ) : (
              <NightsStayRoundedIcon
                onClick={modeChange}
              ></NightsStayRoundedIcon>
            )}
          </div>
          <div className="mode" onClick={modeChange}>
            {day ? "Day Mode" : "Night Mode"}
          </div>
          <Grow>
            <Intro />
          </Grow>
        </div>
        <div className={`modules${mode}`}>
          <div id="aboutMe">
            <AboutMe />
          </div>
          <div id="recent">
            <Recent />
          </div>
          <div id="tools">
            <Tools />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
