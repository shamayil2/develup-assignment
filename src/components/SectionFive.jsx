import Toyota from "../assets/Toyota.png";
import Zepto from "../assets/Zepto.png";
import LT from "../assets/LT.png";
import JustDial from "../assets/JustDial.png";
import HDFC from "../assets/HDFC.png";
import Equitas from "../assets/Equitas.png";

const SectionFive = () => {
  return (
    <>
      <div className="sectionFive">
        <div>
          <h5>
            Top companies hiring at <span>DevelUp</span>
          </h5>
        </div>
        <div className="hiringOrgs">
          <div>
            <img src={Toyota} alt="" />
          </div>
          <div>
            <img src={Equitas} alt="" />
          </div>
          <div>
            <img src={Zepto} alt="" />
          </div>
          <div>
            <img src={HDFC} alt="" />
          </div>
          <div>
            <img src={JustDial} alt="" />
          </div>
          <div>
            <img src={LT} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFive;
