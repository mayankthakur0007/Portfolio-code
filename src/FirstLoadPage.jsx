import "./FirstLoadPage.css";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import Intro from "./Intro";
import LoadingScreen from "./LoadingScreen";
import "./Animation.css";

function FirstLoadPage() {
  const [setContentClass, addContentClass] = useState("App-content");
  const [showContent, changeShowContent] = useState(false);
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
  return (
    <div className="App">
      <div className="loading">
        <LoadingScreen></LoadingScreen>
      </div>
      <div className={setContentClass}>
        <div className="flexbox">
          <div className="yellow">{showContent ? <Menu></Menu> : ""}</div>
          <div className="black">{showContent ? <Intro></Intro> : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default FirstLoadPage;
