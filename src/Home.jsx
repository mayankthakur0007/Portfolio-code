import "./FirstLoadPage.css";
import Menu from "./Menu";
import Intro from "./Intro";
import MobileMenu from "./MobileMenu";
import "./Animation.css";
import { Drawer } from "@material-ui/core";
import { useEffect, useState } from "react";
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

  const toggleDrawer = (open) => () => {
    setState({ ...state, true: open });
  };

  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
  }, []);

  const [iconC, chanceIconC] = useState(
    localStorage.getItem("mode") === "night" && localStorage.getItem("mode") ?"white" : "black"
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
  );
}

export default Home;
