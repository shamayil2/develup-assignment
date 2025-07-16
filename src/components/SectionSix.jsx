import PlayStore from "../assets/PlayStore.png"
import AppStore from "../assets/AppStore.png"
import QR from "../assets/QR.png"
import Phones from "../assets/Phones.png"
const SectionSix = () => {
    return(
        <>
        <div className="sectionSix">
        <div className="sec-container">
        <div className="sec-row">
            <div className="col-md-6">
                <div className="headings">
                    <h2>Track, apply, and grow — anytime, anywhere.</h2>
                <p>Download the app today!</p>
                </div>
                
                <div className="appDiv">
                    <div className="appStores">
                        <img src={PlayStore} alt="" /><br />
                        <img src={AppStore} alt="" />
                    </div>
                    <div className="divider">
                        <div className="divideLine"></div>
                        <div>Or</div>
                        <div className="divideLine"></div>
                    </div>
                    <div className="qr-div">
                    <p>Scan QR to download</p>
                    <img src={QR} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6 phones-img">
                <img src={Phones} alt="" />
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default SectionSix;