import "./Tools.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";

const Tools = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <Grow in={show}>
      <div className="outerBox">
        toolseythsfhr aergaertgae asrtgawrgWRGH SETHAETHJAEGBADTH WRTW
      </div>
    </Grow>
  );
};

export default Tools;
