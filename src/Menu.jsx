import "./Animation.css";
import "./Menu.css";
import { Link, useLocation } from "react-router-dom";
import SportsHandballRoundedIcon from "@material-ui/icons/SportsHandballRounded";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import BuildIcon from "@material-ui/icons/BuildRounded";
import ContactsRoundedIcon from "@material-ui/icons/ContactsRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const Menu = (props) => {
  let items = [
    {
      index: 1,
      name: "/Home",
      text: "Home",
      tag: "<HomeRoundedIcon style={{ fontSize: 40 }} />",
    },
    {
      index: 2,
      name: "/AboutMe",
      text: "About Me",
      tag: "<EmojiPeopleIcon style={{ fontSize: 40 }}/>",
    },
    {
      index: 3,
      name: "/Tools",
      text: "Tools",
      tag: "<BuildIcon style={{ fontSize: 40 }}/>",
    },
    {
      index: 4,
      name: "/RecentWork",
      text: "Recent Work",
      tag: "<SportsHandballRoundedIcon style={{ fontSize: 40 }}/>",
    },
    {
      index: 5,
      name: "/Contact",
      text: "Contact",
      tag: "<ContactsRoundedIcon style={{ fontSize: 40 }}/>",
    },
  ];
  let location = useLocation();

  if(location.pathname==="/"){
    items = items.filter((item) => {
      return (
        item.name !== "/Home"
      );
    });
  }

  let navOptions = items.filter((item) => {
    return (
      item.name !== location.pathname
    );
  });

  return (
    <div className="loadAnimate containers">
      {navOptions.map((field) => {
        return (
          <Link
            key={field.index}
            to={field.name}
            className={`Navlink ${props.iconC}`}
          >
            <div className="link">
              {field.name === "/Home" ? (
                <HomeRoundedIcon style={{ fontSize: 40 }} />
              ) : (
                ""
              )}
              {field.name === "/AboutMe" ? (
                <EmojiPeopleIcon style={{ fontSize: 40 }} />
              ) : (
                ""
              )}
              {field.name === "/Tools" ? (
                <BuildIcon style={{ fontSize: 40 }} />
              ) : (
                ""
              )}
              {field.name === "/RecentWork" ? (
                <SportsHandballRoundedIcon style={{ fontSize: 40 }} />
              ) : (
                ""
              )}
              {field.name === "/Contact" ? (
                <ContactsRoundedIcon style={{ fontSize: 40 }} />
              ) : (
                ""
              )}
              <div className="text">{field.text}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
