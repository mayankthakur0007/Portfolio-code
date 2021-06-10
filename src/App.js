import "./App.css";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import Intro from "./Intro";
import LoadingScreen from "./LoadingScreen";
import "./Animation.css";
import NavigationRoundedIcon from "@material-ui/icons/NavigationRounded";

function App() {
  const [setContentClass, addContentClass] = useState("App-content");
  const [showContent, changeShowContent] = useState(false);
  const [scroller, changeShowScroller] = useState(false);
  const [fading, changeFading] = useState("");
  document.addEventListener("wheel", () => {
    if (window.pageYOffset > 900) {
      changeFading("navigator");
      changeShowScroller(true);
    } else {
      changeShowScroller(false);
    }
  });
  useEffect(() => {
    setTimeout(() => {
      addContentClass("App-content slide");
    }, 4000);
    setTimeout(() => {
      changeShowContent(true);
    }, 5000);
    setTimeout(() => {
      document.querySelector(".loading").innerHTML = "";
      addContentClass("slide");
    }, 6000);
  }, []);
  const moveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    changeShowScroller(false);
  };
  return (
    <div className="App">
      <div className="loading">
        <LoadingScreen></LoadingScreen>
      </div>
      <div className={setContentClass}>
        {scroller ? (
          <div className={fading} onClick={moveTop}>
            <NavigationRoundedIcon style={{ fontSize: 50 }} />
            <div className="text">Go to top</div>
          </div>
        ) : (
          ""
        )}
        <div className="flexbox">
          <div className="yellow">{showContent ? <Menu></Menu> : ""}</div>
          <div className="black">{showContent ? <Intro></Intro> : ""}</div>
        </div>
        {showContent ? (
          <div>
            
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
