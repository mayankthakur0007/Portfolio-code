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
      <div>
        <h1>
          Tools adfaeFae sfaesF AE FAE f ae f ae FA f ae fa F AD FF AF Ads fa sf
          as
        </h1>
      </div>
    </Grow>
  );
};

export default Tools;
