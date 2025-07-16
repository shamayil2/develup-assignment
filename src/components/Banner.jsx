import Candidate from "../assets/Candidate.png";
import TrainerIcon from "../assets/TrainerIcon.png";
import EmployerIcon from "../assets/EmployerIcon.png";
import SearchIcon2 from "../assets/SearchIcon2.png";
import LocationIcon from "../assets/LocationIcon.png";
import DropDownIcon from "../assets/DropDownIcon.png";
import BannerImage from "../assets/BannerImage.png";
import tick from "../assets/tick.png";
const Banner = () => {
  return (
    <>
      <section className="du-banner">
        <div className="content">
          <div className="rowBanner">
            <div className="col-md-6 first-sec">
              <div className="toggleBar">
                <a href="">
                  <img src={Candidate} alt="" />
                  <span>Candidate</span>
                </a>
                <a href="">
                  <img src={EmployerIcon} alt="" />
                  <span>Employer</span>
                </a>
                <a href="">
                  <img src={TrainerIcon} alt="" />
                  <span>Trainer</span>
                </a>
              </div>
              <div className="banner-one-main">
                <h1>
                  Learn.<span>Earn.</span> <br /> Level<span>Up.</span>
                </h1>
                <h4>Don’t chase jobs! Build skills, get hired.</h4>
              </div>
              <div className="searchBar">
                <div>
                  <img src={SearchIcon2} alt="" />
                  <input placeholder="Job title or skill" type="text" />
                  <img src={LocationIcon} alt="" />
                  <input placeholder="Location" type="text" />
                  <a className="dropDown" href="">
                    Experience
                  </a>
                  <img src={DropDownIcon} alt="" />
                  <a className="findBtn" href="">
                    Find job
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 second-sec">
              <img src={BannerImage} alt="" />
              <div className="firstBox">
                <h6>Job Matches</h6>
                <p>Frontend Dev <span>98%</span></p>
                <p>UI Designer<span>94%</span></p>
              </div>
              <div className="secondBox">
                <p>
                  Skills Verified{" "}
                  <img style={{ width: "16px" }} src={tick} alt="" />
                </p>
                <h4>847</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
