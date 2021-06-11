import "./Contact.css";
import Grow from "@material-ui/core/Grow"
import { useEffect, useState } from "react";
import Menu from "./Menu";

const Contact = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(()=>{
    setIsChecked(true);
  },[])
  return (<Grow in={show}><div className="contactContainer">
      <Menu iconC={"black"}/>
      <h1>Contact</h1>
  </div>
  </Grow>);
};

export default Contact;