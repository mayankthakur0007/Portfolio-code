import "./Animation.css";
import "./Menu.css";
import {Link,} from "react-router-dom";
import SportsHandballRoundedIcon from '@material-ui/icons/SportsHandballRounded';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import BuildIcon from '@material-ui/icons/BuildRounded';
import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';

const Menu = (props) => {

  const _handleRecentWorkClick = () => {
    console.log("Recent Work");
    
  };
  const _handleAboutMeClick = () => {
    console.log("About Me");
  };
  const _handleToolsClick = () => {
    console.log("Tools");
  };
  const _handleContactMeClick = () => {
    console.log("Contact Me");
  };

  return (
    <div className="loadAnimate containers">
      <Link to="/AboutMe" className={`Navlink ${props.iconC}`}>
      <div className="icon" onClick={_handleAboutMeClick}>
        <EmojiPeopleIcon style={{ fontSize: 40 }} />
        <div className="text">About Me</div>
      </div>
      </Link>
      <Link to="/Tools" className={`Navlink ${props.iconC}`}>
      <div className="icon" onClick={_handleToolsClick}>
        <BuildIcon style={{ fontSize: 40 }} />
        <div className="text">Tools</div>
      </div>
      </Link>
      <Link to="/RecentWork" className={`Navlink ${props.iconC}`}>
      <div className="icon" onClick={_handleRecentWorkClick}>
        <SportsHandballRoundedIcon style={{ fontSize: 40 }} />
        <div className="text">Recent Work</div>
      </div>
      </Link>
      <Link to="/Contact" className={`Navlink ${props.iconC}`}>
      <div className="icon" onClick={_handleContactMeClick}>
        <ContactsRoundedIcon style={{ fontSize: 40 }} />
        <div className="text">Contact Me</div>
      </div>
      </Link>
    </div>
  );
};

export default Menu;
