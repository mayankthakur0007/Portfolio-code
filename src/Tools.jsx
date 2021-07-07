import "./Tools.css";
import Fade from "react-reveal/Fade";

const Tools = () => {
  return (
    <div className="outerBox">
      <Fade bottom>
        <div className="toolsHeading">
          <h1>My Tools</h1>
        </div>
      </Fade>
      <Fade left>
        <div className="toolsContent">
          <div className="myTools">
            <ul>
              <li>React.js</li>
              <li>Polymer.js</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>LIT HTML</li>
              <li>HTML/CSS</li>
              <li>Github</li>
              <li>Pega</li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Tools;
