import "./AboutMe.css";
import profile from "./images/myImage.png";
import DownloadResume from "./DownloadResume";
import Fade from 'react-reveal/Fade.js';

const AboutMe = () => {

  return (
      
        <div className="aboutMeContent">
          <Fade left>
          <div className="profileImage">
            <img src={profile} width="400px" height="400px" alt="profile" />
          </div>
          </Fade>
          <Fade right>
          <div className="myDescription">
            I'm a front-end developer from Aligarh, India currently working in
            HCL Technolgies LTD. on React.js, Polymer.Js, HTML, CSS, LIT HTML,
            Javacript. I love to learn UI releated framework and technologies
            and to make responsive and user friendly websites. I am planning to learn
            more frontend and backend technolgies as well in order to become a full stack developer. Apart from this I'm also Pega
            CSA and CSSA Certified Developer and have a good knowledge on PRPC. Right now I'm learning Google firebase and
            Kotlin for making apis in node.js and firebase services for android
            development like authentication and more. Feel free to <a className="contact" href="#contact">Contact Me</a> if you think I can fit in your project
          </div>
          <div className="downloadResume">
            <h3>Download Resume</h3>
            <DownloadResume />
          </div>
          </Fade>
        </div>
    
  );
};

export default AboutMe;
