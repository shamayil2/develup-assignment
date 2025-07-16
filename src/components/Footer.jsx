import Facebook from "../assets/Facebook.png"
import Twitter from "../assets/twitter.png"
import Linkedin from "../assets/Linkedin.png"
import Insta from "../assets/Insta.png"
import DevelUp from "../assets/DevelUp.png";
import map from "../assets/map.png";
import mail from "../assets/mail.png"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="du-footer">
          <div className="footer-container">
            <div className="sec-one">
              <div className="col-one">
                <img src={DevelUp} alt="" />
                <p>
                  Empowering careers through AI- powered connections and
                  verified skill development.
                </p>
                <div className="socialIcons">
                <img src={Facebook} alt="" />
                  <img src={Twitter} alt="" />
                  <img src={Linkedin} alt="" />
                  <img src={Insta} alt="" />
                </div>
              </div>
              <div className="col-two">
                <ul>
                    <li>Company</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Contact</li>
                </ul>
              </div>
              <div className="col-three">
                <ul>
                    <li>Popular Jobs</li>
                    <li>Software Engineer</li>
                    <li>Product Manager</li>
                    <li>UI/UX Designer</li>
                </ul>
              </div>
              <div className="col-four">
                 <ul>
                    <li>Support</li>
                    <li>Help Center</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookie Policy</li>
                </ul>
              </div>
            </div>
            <div className="sec-two">
                <div className="col-one">
                    <p>© 2025 DevelUp Technologies Pvt Ltd</p>
                    </div>
                <div className="col-two">
                <ul>
                    <li>Quick Links</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
              
              </div>
                <div className="col-three">
                 <ul>
                    <li>Contact</li>
                    <li><img src={mail} alt="" />hello@develup.in</li>
                    <li><img src={map} alt="" />Bengaluru, India</li>
                </ul>
                </div>
                <div></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
