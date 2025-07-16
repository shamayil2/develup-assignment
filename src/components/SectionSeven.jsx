import Person from "../assets/Person.png"
const SectionSeven = () => {
    return(
        <>
        <div className="sectionSeven">
            <div className="container">
                <div className="sec-row">
                    <div className="content">
                        <h6>Are you a recruiter?</h6>
                        <h1>Hire Smarter. Faster. with <span>DevelUp.</span></h1>
                        <a href="">Start hiring now</a>
                    </div>
                    <div className="person-img">
                        <img src={Person} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SectionSeven;