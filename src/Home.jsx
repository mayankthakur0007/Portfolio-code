import "./FirstLoadPage.css";
import Menu from "./Menu";
import Intro from "./Intro";
import "./Animation.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

function Home() {
  const [show, setIsChecked] = useState(false);
  const [iconC, chanceIconC] = useState("white");
  const [day, changeIcon] = useState(true);
  const [mode, setMode] = useState("night");
  useEffect(() => {
    setIsChecked(true);
  }, []);

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
      <div className="App-content slide">
        <Grow in={show}>
          <div className={mode}>
            <div className="menuIcon">
              <MenuRoundedIcon />
            </div>
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
              {day ? "Night Mode" : "Day Mode"}
            </div>
            <Intro />
          </div>
        </Grow>
      </div>
    </div>
  );
}

export default Home;
