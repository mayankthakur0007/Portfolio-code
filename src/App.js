import Home from "./Home";
import AboutMe from "./AboutMe";
import Page404 from "./404Page";
import Contact from "./Contact";
import RecentWork from "./RecentWork";
import Tools from "./Tools";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
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
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
