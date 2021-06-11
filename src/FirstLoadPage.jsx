import "./FirstLoadPage.css";
import Menu from "./Menu";
import Intro from "./Intro";
import LoadingScreen from "./LoadingScreen";
import "./Animation.css";
import MobileMenu from "./MobileMenu";
import { Drawer } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
import { useEffect, useState } from "react";

function FirstLoadPage() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, true: open });
  };
  const [setContentClass, addContentClass] = useState("App-content");
  useEffect(() => {
    setTimeout(() => {
      addContentClass("App-content slide");
    }, 4000);
    setTimeout(() => {
      addContentClass("slide");
      document.querySelector(".loading").innerHTML = "";
    }, 6000);
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
      <div className="loading">
        <LoadingScreen></LoadingScreen>
      </div>
      <div className={setContentClass}>
        <div className={mode}>
          <div className="menuIcon">
            <MenuRoundedIcon onClick={toggleDrawer(true)} />
          </div>
          <Drawer open={state[true]} onClose={toggleDrawer(false)}>
            <MobileMenu closeDrawer={toggleDrawer(false)} />
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
            {day ? "Day Mode" : "Night Mode"}
          </div>
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default FirstLoadPage;
