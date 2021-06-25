import "./Home.css";
import Menu from "./Menu";
import Intro from "./Intro";
import { Grow } from "@material-ui/core";
import "./Animation.css";
import MobileMenu from "./MobileMenu";
import { Drawer } from "@material-ui/core";
import { useState, useEffect } from "react";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

function Home() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [show, setIsChecked] = useState(false);
  useEffect(()=>{
    setIsChecked(true);
  },[])
  const toggleDrawer = (open) => () => {
    setState({ ...state, true: open });
  };

  const [iconC, chanceIconC] = useState(
    localStorage.getItem("mode") === "day" && localStorage.getItem("mode") ?"black" : "white"
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
    <Grow in={show}>
    <div className="App">
      <div className="slide">
          <div className={mode}>
            <div className="menuIcon">
              <MenuRoundedIcon onClick={toggleDrawer(true)}/>
            </div>
            <Drawer open={state[true]} onClose={toggleDrawer(false)}>
           <MobileMenu closeDrawer={toggleDrawer(false)}/>
          </Drawer>
            <div className="menu">
              <Menu iconC={iconC} />
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
              {day ? "Day Mode": "Night Mode"}
            </div>
            <Intro />
          </div>
      </div>
    </div>
    </Grow>
  );
}

export default Home;
