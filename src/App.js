import FirstLoadPage from "./FirstLoadPage";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Page404 from "./404Page";
import Contact from "./Contact";
import RecentWork from "./RecentWork";
import Tools from "./Tools";
import { HashRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Route exact path="/">
          <FirstLoadPage />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/AboutMe">
          <AboutMe />
        </Route>
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/RecentWork">
          <RecentWork />
        </Route>
        <Route exact path="/Tools">
          <Tools />
        </Route>
      </HashRouter>
    </div>
  );
};

export default App;
