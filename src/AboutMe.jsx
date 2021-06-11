import "./AboutMe.css";
import Grow from "@material-ui/core/Grow"
import { useEffect, useState } from "react";

const AboutMe = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(()=>{
    setIsChecked(true);
  },[])
  return (
    <div className="outerBox">
      <div className="innerBox">
        <div className="image">
          <Grow in={show}>
          <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2170&q=80" alt="hello" />
          </Grow>
        </div>
        <div className="about"></div>
      </div>
    </div>
  );
};

export default AboutMe;
