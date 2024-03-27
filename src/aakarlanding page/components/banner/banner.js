import mobilepic from "../../../img/download_app.png";
import googlePlayLogo from "../../../img/googleplaystore.png";
import apppleStoreLogo from "../../../img/appstore.png";

function Banner() {

  return (
    <div className="container-fluid bg-danger container-banner-outerBox">
      <div className="container-banner">
        <div className="container-banner_box-1">
          <div className="container-banner_box-1-imageBox">
            <img
              className="container-banner_box-1-image"
              src={mobilepic}
              alt="loading"
            />
          </div>
        </div>
        <div className="container-banner_box-2">
          <p className="container-banner_box-2_text">DOWNLOAD THE</p>
          <p className="container-banner_box-2_text">AAKAR APP TODAY!</p>{" "}
        </div>
        <div className="container-banner_box-3">
          <div className="container-banner_box-3-box-1">
            <img
              className="container-banner_box-3-box-1_img"
              src={googlePlayLogo}
              alt="loading"
            />
          </div>
          <div className="container-banner_box-3-box-2"></div>
          <div className="container-banner_box-3-box-3">
            <img
              className="container-banner_box-3-box-3_img"
              src={apppleStoreLogo}
              alt="loading"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
