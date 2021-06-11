import "./Tools.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const Tools = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
  }, []);
  return (
    <Grow in={show}>
      <div>
      <Menu iconC={"black"}/>
      <h1>Tools</h1>
      </div>
    </Grow>
  );
};

export default Tools;
