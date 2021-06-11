import "./RecentWork.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";

const RecentWork = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
  }, []);
  return (
    <Grow in={show}>
      <div>
        <h1>Recent Work</h1>
      </div>
    </Grow>
  );
};

export default RecentWork;
