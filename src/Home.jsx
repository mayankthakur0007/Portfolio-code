import "./FirstLoadPage.css";
import Menu from "./Menu";
import Intro from "./Intro";
import "./Animation.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import NightsStayRoundedIcon from "@material-ui/icons/NightsStayRounded";

function Home() {
  const [show, setIsChecked] = useState(false);
  const [iconC, chanceIconC] = useState("white")
  const [day, changeIcon] = useState(true);
  const [mode, setMode] = useState("night");
  useEffect(() => {
    setIsChecked(true);
  }, []);

  const modeChange = () => {
    if (mode === "day") {
      setMode("night");
      chanceIconC("white")
      changeIcon(true);
    } else {
      setMode("day");
      changeIcon(false);
      chanceIconC("black")
    }
  };

  return (
    <Grow in={show}>
      <div className="App">
        <div className="App-content slide">
          <div className={mode}>
            <Menu iconC={iconC}/>
            <div className="mode">
            {day ? (
              <WbSunnyRoundedIcon
                onClick={modeChange}
              ></WbSunnyRoundedIcon>
            ) : (
              <NightsStayRoundedIcon
                onClick={modeChange}
              ></NightsStayRoundedIcon>
            )}
            </div>
            <Intro />
          </div>
        </div>
      </div>
    </Grow>
  );
}

export default Home;
