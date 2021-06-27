import "./RecentWork.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Drawer } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const RecentWork = (props) => {

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
     <div className={`recentContainer${props.mode}`}>
       <div className="desktopMenu">
         <Menu iconC={colorText} />
       </div>
       <div className="menuIcon">
          <MenuRoundedIcon className={`menu${props.mode}`} onClick={toggleDrawer(true)} />
        </div>
       <Drawer open={state[true]} onClose={toggleDrawer(false)}>
         <MobileMenu closeDrawer={toggleDrawer(false)} />
       </Drawer>
       Recent
     </div>
   </Grow>
  );
};

export default RecentWork;
