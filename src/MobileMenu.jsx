import "./Animation.css";
import "./MobileMenu.css";
import { Link, useLocation } from "react-router-dom";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const MobileMenu = (props) => {
  let items = [
    {
      index: 1,
      name: "/",
      text: "Home",
    },
    {
      index: 2,
      name: "/AboutMe",
      text: "About Me",
    },
    {
      index: 3,
      name: "/Tools",
      text: "Tools",
    },
    {
      index: 4,
      name: "/RecentWork",
      text: "Recent Work",
    },
    {
      index: 5,
      name: "/Contact",
      text: "Contact",
    },
  ];
  let location = useLocation();

  if (location.pathname === "/") {
    items = items.filter((item) => {
      return item.name !== "/Home";
    });
  }

  const close = () => {
    props.closeDrawer();
  };

  let navOptions = items.filter((item) => {
    return item.name !== location.pathname;
  });

  return (
    <div className="loadAnimate content">
      <div className="close">
        <CloseRoundedIcon onClick={close} />
      </div>
      {navOptions.map((field) => {
        return (
          <Link key={field.index} to={field.name} className="Nav">
            <div className="linkItem">
              <div className="value">{field.text}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileMenu;
