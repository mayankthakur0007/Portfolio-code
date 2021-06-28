import "./AboutMe.css";
import profile from "./images/myImage.png";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";
import DownloadResume from "./DownloadResume";

const AboutMe = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
    <Grow in={show}>
      <div>
        <div className="aboutMeContent">
          <div className="profileImage">
            <img src={profile} width="400px" height="400px" alt="profile" />
          </div>
          <div className="myDescription">
            I'm a front-end developer from Aligarh, India currently working in
            HCL Technolgies LTD. on React.js, Polymer.Js, HTML, CSS, LIT HTML,
            Javacript. I love to learn UI releated framework and technologies
            and to make responsive and user friendly websites. I am planning to learn
            more frontend and backend technolgies as well in order to become a full stack developer. Apart from this I'm also Pega
            CSA and CSSA Certified Developer and have a good knowledge on PRPC. Right now I'm learning Google firebase and
            Kotlin for making apis in node.js and firebase services for android
            development like authentication and more. 
          </div>
          <div className="downloadResume">
            <h3>Download Resume</h3>
            <DownloadResume />
          </div>
        </div>
      </div>
    </Grow>
  );
};

export default AboutMe;
