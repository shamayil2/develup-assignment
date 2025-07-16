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
                    <li><a href="">Company</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
              </div>
              <div className="col-three">
                <ul>
                    <li><a href="">Popular Jobs</a></li>
                    <li><a href="">Software Engineer</a></li>
                    <li><a href="">Product Manager</a></li>
                    <li><a href="">UI/UX Designer</a></li>
                </ul>
              </div>
              <div className="col-four">
                 <ul>
                    <li><a href="">Support</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="sec-two">
                <div className="col-one">
                    <p>© 2025 DevelUp Technologies Pvt Ltd</p>
                    </div>
                <div className="col-two">
                <ul>
                    <li><a href="">Quick Links</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
              
              </div>
                <div className="col-three">
                 <ul>
                    <li>Contact</li>
                    <li><img src={mail} alt="" />hello@develup.in</li>
                    <li><img src={map} alt="" />Bengaluru, India</li>
                </ul>
                </div>
                <div className="col-four"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
