import "./Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="contactContainer">
      <Fade bottom>
        <h1>Contact</h1>
      </Fade>
      <Fade right>
        <section className="socialMedia">
          <ul className="sci">
            <li>
              <a href="https://www.facebook.com/mayankthakur007" target="_blank">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mayank_thakur0810/" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/mayankthakur0007" target="_blank">
                <i className="fa fa-git" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mayank-pratap-singh-31464962/" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </section>
      </Fade>
      <Fade left>
        <div className="emailMe"></div>
      </Fade>
    </div>
  );
};

export default Contact;
