import CodeIcon from "../assets/CodeIcon.png"
import jobLocation from "../assets/jobLocation.png"
import jobExp from "../assets/jobExp.png"
import BrowseJobs from "../assets/BrowseJobs.png"
const SectionTwo = () => {
    const menuItems = ["All Jobs","Remote","Full-time","Fresher","Experienced"]
    return(
        <>
        <div className="sectionTwo">
        <div className="container">
            <h1>Find Your Dream Job</h1>
            <p>Discover opportunities that match your skills and aspirations with our AI- powered job matching system.</p>
            <div className="text-center">
                <ul className="menuList">
                    {menuItems.map((item)=>(
                        <li><a href="">{item}</a></li>
                    ))}
                </ul>
            </div>
            <div className="row">
                    <div className="cardItem col-md-6">
                        <div className="jobTitle">
                            <div className="img-parent">
                         <img src={CodeIcon} alt="" />
                            </div>
                           
                            <div>
                                <h5>Frontend Developer</h5>
                                <h6>TechCorp Solutions</h6>
                            </div>
                        </div>
                        <div>
                            <ul className="jobList">
                                <li style={{backgroundColor:"#dbeafeff",color:"#1e40afff"}}>React</li>
                                <li style={{backgroundColor:"#dcfce7ff",color:"#1e40afff101, 52, 1)"}}>JavaScript</li>
                                <li style={{backgroundColor:"#f3e8ffff",color:"#6b21a8ff, 52, 1)"}}>Remote</li>
                            </ul>
                        </div>
                        <div className="jobDetails">
                            <p><img src={jobLocation} alt="" />Bangalore</p>
                            <p><img src={jobExp} alt="" /> 2-4 years</p>
                            <p style={{color:"#16a34aff"}}>₹8-12 LPA</p>
                        </div>
                        <div className="jobBtn">
                            <button className="btn">Apply Now</button>
                        </div>
                    </div>
                    <div className="cardItem col-md-6">
                        <div className="jobTitle">
                            <div className="img-parent">
                         <img src={CodeIcon} alt="" />
                            </div>
                           
                            <div>
                                <h5>Frontend Developer</h5>
                                <h6>TechCorp Solutions</h6>
                            </div>
                        </div>
                        <div>
                            <ul className="jobList">
                                <li style={{backgroundColor:"#dbeafeff",color:"#1e40afff"}}>React</li>
                                <li style={{backgroundColor:"#dcfce7ff",color:"#1e40afff101, 52, 1)"}}>JavaScript</li>
                                <li style={{backgroundColor:"#f3e8ffff",color:"#6b21a8ff, 52, 1)"}}>Remote</li>
                            </ul>
                        </div>
                        <div className="jobDetails">
                            <p><img src={jobLocation} alt="" />Bangalore</p>
                            <p><img src={jobExp} alt="" /> 2-4 years</p>
                            <p style={{color:"#16a34aff"}}>₹8-12 LPA</p>
                        </div>
                        <div className="jobBtn">
                            <button>Apply Now</button>
                        </div>
                    </div>
                    <div className="browseJobs">
                        <p>Browse all jobs <img src={BrowseJobs} alt="" /></p>
                    </div>
                    
            </div>
        </div>
        </div>
        
        </>
    )
}

export default SectionTwo;