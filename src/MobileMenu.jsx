import "./Animation.css";
import "./MobileMenu.css";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const MobileMenu = (props) => {
  let navOptions = [
    {
      index: 1,
      name: "#home",
      text: "Home",
    },
    {
      index: 2,
      name: "#aboutMe",
      text: "About Me",
    },
    {
      index: 3,
      name: "#tools",
      text: "Tools",
    },
    {
      index: 4,
      name: "#recent",
      text: "Recent Work",
    },
    {
      index: 5,
      name: "#contact",
      text: "Contact",
    },
  ];

  const close = () => {
    props.closeDrawer();
  };

  return (
    <div className="loadAnimate content">
      <div className="close">
        <CloseRoundedIcon onClick={close} />
      </div>
      {navOptions.map((field) => {
        return (
          <a key={field.index} href={field.name} className="Nav">
            <div className="linkItem">
              <div className="value">{field.text}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default MobileMenu;
