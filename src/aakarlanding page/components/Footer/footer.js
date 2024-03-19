import footerLogo from "../../../img/footer_logo.png"
import facebook from "../../../img/ic_facebook.png"
import instagram from  "../../../img/ic_insta.png"
import linkedin from "../../../img/ic_linkedin.png"
import youtube from "../../../img/ic_youtube.png"
import twitter from "../../../img/ic_twitter.png"
function Footer(){
    return(<div className="container-fluid container-footer">
        <div className="container-footer-outer-box">
        <div className="container-footer-outer-box-box1">
        <div className="container-footer-outer-box-box1-imageBox">
        <img className="container-footer-outer-box-box1-imageBox-image" src={footerLogo} alt="loading"/>
        </div>
        <p className="container-footer-outer-box-box1-text">Aakar is an action-packed event that combines problem-solving activities, and teamwork exercises.</p>
        </div>
        <div className="container-footer-outer-box-box2">© 2024 Copyright By AppsEvent</div>
        <div className="container-footer-outer-box-box3"><div className="container-footer-outer-box-box3-image-box"><img className="container-footer-outer-box-box3-image-box-image"src={facebook} alt=""/></div><div className="container-footer-outer-box-box3-image-box"><img className="container-footer-outer-box-box3-image-box-image" src={instagram} alt=""/></div ><div className="container-footer-outer-box-box3-image-box"><img className="container-footer-outer-box-box3-image-box-image" src={linkedin} alt=""/></div><div className="container-footer-outer-box-box3-image-box"><img className="container-footer-outer-box-box3-image-box-image" src={twitter} alt=""/></div><div className="container-footer-outer-box-box3-image-box"><img className="container-footer-outer-box-box3-image-box-image" src={youtube}alt=""/></div></div></div></div>)

}
export default Footer;
