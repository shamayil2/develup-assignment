import logoOne from "../assets/logoOne.png";
import logoTwo from "../assets/logoTwo.png";
import logoThree from "../assets/logoThree.png";
import logoFour from "../assets/logoFour.png";
import logoFive from "../assets/logoFive.png";
import logoSix from "../assets/logoSix.png";
const SectionOne = () => {
  const dataArr = [
    {
      title: "AI Job Matching",
      description: "Smart algorithms match you with perfect opportunities",
      tag: "Popular",
      imgSrc: logoOne,
      bgColor:"166534"
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes in minutes",
      tag: "New",
      imgSrc: logoTwo,
      bgColor:"1E40AF"
    },
    {
      title: "Live Workshops",
      description: "Interactive learning with industry experts",
      tag: "",
      imgSrc: logoThree,
      bgColor:""
    },
    {
      title: "Application Tracker",
      description: "Monitor your job applications in real- time",
      tag: "",
      imgSrc: logoFour,
      bgColor:""
    },
    {
      title: "Smart Filters",
      description: "Advanced search with intelligent filtering",
      tag: "",
      imgSrc: logoFive,
      bgColor:""
    },
    {
      title: "Verified Badges",
      description: "Showcase your skills with verified certifications",
      tag: "Beta",
      imgSrc: logoSix,
      bgColor:"#6B21A8"
    },
  ];
  console.log(dataArr);
  return (
    <>
      <div className="sectionOne">
        <div className="container text-center
        ">
          <h1 className="heading">Built to Help You <span>Grow</span> </h1>
          <div className="row">
            {dataArr.map((item) => (
              <div className={`col-md-4 cardItem ${item.tag}`}>
                <img src={item.imgSrc} alt="" />
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                <p className="tagPara">{item.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
