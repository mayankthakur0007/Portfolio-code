import "./intro.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

const Intro = () => {
  const [quote, changeQuote] = useState();
  const [author, changeAuthor] = useState();
  const [showQuote, changeshowQuote] = useState(false);

  const options = "https://api.quotable.io/random?maxLength=60";

  useEffect(() => {
    axios(options).then(function (response) {
      changeQuote(response.data.content);
      changeAuthor(response.data.author);
      changeshowQuote(true);
    });
  }, []);

  return (
    <div className="introContent">
      <div className="nameContainer">
        <Fade top>
          <h1>Hi, I'm</h1>
          <h1 className="name">
            <span className="first">M</span>
            <span className="rest">ayank </span>
            <span className="first">P</span>
            <span className="rest">ratap </span>
            <span className="first">S</span>
            <span className="rest">ingh,</span>
          </h1>
        </Fade>
        <Fade bottom>
          <h1>
            a Front-end developer from India currently working in HCL
            Technologies LTD.
          </h1>
        </Fade>
      </div>
      {showQuote ? (
        <Fade left>
          <div className="blockquoteWrapper">
            <div className="blockquote">
              <h1>{quote}</h1>
            </div>
            <div className="author">
              <h4>-{author}</h4>
            </div>
          </div>
        </Fade>
      ) : (
        ""
      )}
    </div>
  );
};

export default Intro;
