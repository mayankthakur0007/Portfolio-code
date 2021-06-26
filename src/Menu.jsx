import "./Animation.css";
import "./Menu.css";
import { Link, useLocation } from "react-router-dom";

const Menu = (props) => {

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

  let navOptions = items.filter((item) => {
    return item.name !== location.pathname;
  });

  return (
    <div className="loadAnimate containers">
      <div className="menuBox">
        {navOptions.map((field) => {
          return (
            <Link
              key={field.index}
              to={field.name}
              className={`Navlink ${props.iconC}`}
            >
              <div className="link">
                <span className={`${props.iconC}mode`}>{field.text}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
