import "./Tools.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Drawer } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Tools = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
  }, []);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, true: open });
  };
  return (
    <Grow in={show}>
    <div className="outerBox">
      <div className="desktopMenu">
        <Menu iconC={"black"} />
      </div>
      <div className="menuOpen">
        <MenuRoundedIcon onClick={toggleDrawer(true)} />
      </div>
      <Drawer open={state[true]} onClose={toggleDrawer(false)}>
        <MobileMenu closeDrawer={toggleDrawer(false)} />
      </Drawer>
      toolseythsfhr
      aergaertgae
      asrtgawrgWRGH
      SETHAETHJAEGBADTH
      WRTW
    </div>
  </Grow>
  );
};

export default Tools;
