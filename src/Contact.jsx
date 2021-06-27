import "./Contact.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";

const Contact = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <Grow in={show}>
      <div className="contactContainer">
       Contact
      </div>
    </Grow>
  );
};

export default Contact;
