import "./FirstLoadPage.css";
import Menu from "./Menu";
import Intro from "./Intro";
import LoadingScreen from "./LoadingScreen";
import "./Animation.css";
import { useEffect, useState } from "react";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";

function FirstLoadPage() {
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

  const [iconC, chanceIconC] = useState("white");
  const [day, changeIcon] = useState(true);
  const [mode, setMode] = useState("night");

  const modeChange = () => {
    if (mode === "day") {
      setMode("night");
      chanceIconC("white");
      changeIcon(true);
    } else {
      setMode("day");
      changeIcon(false);
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
            <Menu iconC={iconC} />
            <div className="mode">
              {day ? (
                <WbSunnyRoundedIcon onClick={modeChange}></WbSunnyRoundedIcon>
              ) : (
                <NightsStayRoundedIcon
                  onClick={modeChange}
                ></NightsStayRoundedIcon>
              )}
            </div>
            {day? "Day Mode": "Night Mode" }
            <Intro />
          </div>
        </div>
    </div>
  );
}

export default FirstLoadPage;
