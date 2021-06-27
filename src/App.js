import Home from "./Home";
import AboutMe from "./AboutMe";
import Page404 from "./404Page";
import Contact from "./Contact";
import RecentWork from "./RecentWork";
import Tools from "./Tools";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [pageMode, pageModechanged] = useState("");
  useEffect(()=>{
    localStorage.getItem("mode")
    ? pageModechanged(localStorage.getItem("mode"))
    : pageModechanged("night");
  },[])
  const modeSwitch = (mode) => {
    pageModechanged(mode);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home getMode={modeSwitch} />
        </Route>
        <Route exact path="/AboutMe">
          <AboutMe mode={pageMode} />
        </Route>
        <Route exact path="/Contact">
          <Contact mode={pageMode} />
        </Route>
        <Route exact path="/RecentWork">
          <RecentWork mode={pageMode} />
        </Route>
        <Route exact path="/Tools">
          <Tools mode={pageMode} />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
