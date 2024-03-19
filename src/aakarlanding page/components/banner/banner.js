import mobilepic from "../../../img/download_app.png"
import googlePlayLogo from "../../../img/googleplaystore.png"
import apppleStoreLogo from "../../../img/appstore.png"
function Banner(){
    return(<div className="container-fluid bg-danger container-banner-outerBox">
      <div className="container-banner"><div className="container-banner_box-1"><div className="container-banner_box-1-imageBox"><img className="container-banner_box-1-image"src={mobilepic} alt="loading"/></div></div><div className="container-banner_box-2"><p className="container-banner_box-2_text">DOWNLOAD THE</p><p className="container-banner_box-2_text">AAKAR APP TODAY!</p> </div><div className="container-banner_box-3"><div className="container-banner_box-3-box-1"><img className="container-banner_box-3-box-1_img" src={ googlePlayLogo} alt="loading"/></div><div className="container-banner_box-3-box-2"></div><div className="container-banner_box-3-box-3"><img className="container-banner_box-3-box-3_img" src={apppleStoreLogo} alt="loading"/></div></div></div>
      {/* <div className="container-banner ">
       <div className="container-banner-box"> <div className="container-banner-box_1"><div className="container-banner-box_1-picbox"><img className="container-banner-box_1-pic" src="https://media.istockphoto.com/id/1494464996/photo/hand-holding-smartphone-isolated-on-white-background-clipping-path.jpg?s=2048x2048&w=is&k=20&c=IipC67lE-_oGWGRk3vTxVw8h3bkEi88S9gINbRCWGRE="/></div></div>
        <div className="container-banner-box_2">DOWNLOAD THE AAKAR APP TODAY!</div> <div className="container-banner-box_3"><div className="container-banner-box_3-box-1 card"></div>
        <div className="container-banner-box_3-box-2 card" >
        <img src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">GET IT ON</p>
    <h5 class="card-title">GOOGLE PLAY</h5>
  </div>
        </div>
        </div></div></div> */}
        </div>)
}
export default Banner;