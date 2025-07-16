import SectionFourCard from "./SectionFourCard";
import Arrow from "../assets/Arrow.png"
const SectionFour = () => {
  const arrData = [
    "All Courses",
    "Technology",
    "Design",
    "Marketing",
    "Business",
  ];
  return (
    <>
      <div className="sectionFour">
        <div className="container">
          <h2>
            Skill<span>Up</span> to Level<span>Up</span>
          </h2>
          <p>
            Master in-demand skills with AI-powered courses designed by industry
            experts. Earn verified badges that boost your career.
          </p>
          <div className="list">
            <ul>
              {arrData.map((course) => (
                <li>{course}</li>
              ))}
            </ul>
          </div>
          <div className="row">
            <div className="col-md-4">
              <SectionFourCard />
            </div>
            <div className="col-md-4">
              <SectionFourCard />
            </div>
            <div className="col-md-4">
              <SectionFourCard />
            </div>
          </div>
          <div className="viewCourses">
            <p>
              View all courses <img src={Arrow} alt="" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
