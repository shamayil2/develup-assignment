import sec3Img from "../assets/sec3Img.png"
import tickIcon from "../assets/tickIcon.png"
const SectionThree = () => {

    return(
        <>
        <div className="sectionThree">
            <div className="row">
                <div className="sec-img col-md-6">
                <img src={sec3Img} alt="" />
                </div>
                <div className="sec3Content col-md-6">
                    <div>
                        <h3>Create a job-winning resume in <span>2 minutes</span></h3>
                    </div>
                    <div>
                        <p>Our AI-powered resume builder helps you create professional resumes that get noticed by employers. Choose from multiple templates and get instant feedback.</p>
                    </div>
                    <div className="features">
                        <ul >
                            <li><img src={tickIcon} alt="" />Professional templates</li>
                            <li><img src={tickIcon} alt="" />AI-powered suggestions</li>
                            <li><img src={tickIcon} alt="" />ATS-friendly formats</li>
                        </ul>
                    </div>
                    <div>
                        <a href="">Try Resume Builder</a>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default SectionThree;