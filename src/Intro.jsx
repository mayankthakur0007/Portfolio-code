import "./intro.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grow } from "@material-ui/core";

const Intro = () => {

  const [quote, changeQuote] = useState("");
  const [author, changeAuthor] = useState("");
  const [showQuote, changeshowQuote] = useState(false);

  const options = "https://api.quotable.io/random?maxLength=100";

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
        <h1 className="name">
          <span className="first">M</span>
          <span className="rest">ayank </span>
          <span className="first">P</span>
          <span className="rest">ratap </span>
          <span className="first">S</span>
          <span className="rest">ingh</span>
        </h1>
      </div>
      <Grow in={showQuote}>
        <div>
          <div className="blockquote-wrapper">
            <div className="blockquote">
              <h1>{quote}</h1>
              <h4>{author}</h4>
            </div>
          </div>
        </div>
      </Grow>
    </div>
  );
};

export default Intro;
