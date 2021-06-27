import "./Animation.css";
import "./Menu.css";

const Menu = (props) => {

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

  return (
    <div className="loadAnimate containers">
      <div className="menuBox">
        {navOptions.map((field) => {
          return (
            <a
              key={field.index}
              href={field.name}
              className={`Navlink ${props.iconC}`}
            >
              <div className="link">
                <span className={`${props.iconC}mode`}>{field.text}</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
