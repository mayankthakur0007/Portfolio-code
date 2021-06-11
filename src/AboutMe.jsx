import "./AboutMe.css";
import Grow from "@material-ui/core/Grow"
import { useEffect, useState } from "react";
import Menu from "./Menu";

const AboutMe = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(()=>{
    setIsChecked(true);
  },[])
  
  return (
    <Grow in={show}>
    <div className="outerBox">
      <Menu iconC={"black"}/>
       About Me
      </div>
    </Grow>
  );
};

export default AboutMe;
