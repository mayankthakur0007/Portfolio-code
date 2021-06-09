import "./Animation.css";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="loadAnimate containers">
      <div className="container">
        <div className="icon"></div>
        <div className="text">Home</div>
      </div>
      <div className="container">
        <div className="icon"></div>
        <div className="text">About Me</div>
      </div>
      <div className="container">
        <div className="icon"></div>
        <div className="text">Tools</div>
      </div>
      <div className="container">
        <div className="icon"></div>
        <div className="text">Contact Me</div>
      </div>
    </div>
  );
};

export default Menu;
