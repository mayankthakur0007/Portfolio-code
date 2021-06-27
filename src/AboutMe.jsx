import "./AboutMe.css";
import profile from "./images/myImage.png";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { Drawer } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const AboutMe = (props) => {
  const [colorText, changeColorText] = useState();
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
    props.mode === "night"
      ? changeColorText("white")
      : changeColorText("black");
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
      <div className={`aboutMe${props.mode}`}>
        <div className="desktopMenu">
          <Menu iconC={colorText} />
        </div>
        <div className="menuIcon">
          <MenuRoundedIcon
            className={`menu${props.mode}`}
            onClick={toggleDrawer(true)}
          />
        </div>
        <Drawer open={state[true]} onClose={toggleDrawer(false)}>
          <MobileMenu closeDrawer={toggleDrawer(false)} />
        </Drawer>
        <div className="aboutMeContent">
          <div className="profileImage">
            <img src={profile} width="500px" height="500px" alt="profile" />
          </div>
          <div className="myDescription">
            jThere's usually two solutions to embedding images into your web
            content: This means you can set its height and width which could
            result in a non-uniform scaling applied to each dimension. 2) Apply
            background-image  jThere's usually two solutions to embedding images into your web
            content: This means you can set its height and width which could
            result in a non-uniform scaling applied to each dimension. 2) Apply
            background-image via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup: jThere's usually two solutions to embedding images into your web
            content: This means you can set its height and width which could
            result in a non-uniform scaling applied to each dimension. 2) Apply
            background-image via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup: jThere's usually two solutions to embedding images into your web
            content: This means you can set its height and width which could
            result in a non-uniform scaling applied to each dimension. 2) Apply
            background-image via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup: jThere's usually two solutions to embedding images into your web
            content: This means you can set its height and width which could
            result in a non-uniform scaling applied to each dimension. 2) Apply
            background-image via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup: jThere's usually two solutions to embedding images into your web
            content: This means you can set its height and width which could
            result in a non-uniform scaling applied to each dimension. 2) Apply
            background-image via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup:via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup:
          </div>
        </div>
      </div>
    </Grow>
  );
};

export default AboutMe;
