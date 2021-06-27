import "./Tools.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Drawer } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const Tools = (props) => {

  const [colorText, changeColorText] = useState();
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
    props.mode==="night"?changeColorText("white"):changeColorText("black")
  }, [props]);

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
    <div className={`outerBox${props.mode}`}>
      <div className="desktopMenu">
        <Menu iconC={colorText} />
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
