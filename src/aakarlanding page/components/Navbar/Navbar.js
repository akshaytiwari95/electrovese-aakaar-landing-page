import aakar from "../../../img/ic_aakar_logo.png"
function Navbar(){
    return(<div className="container-fluid sticky-top">
    <div className=" nav-container">
      <div className="nav-box">
        <div className="nav-container-image">  <img className="" src={aakar} alt="Bootstrap" width="100%" height="100%"/>
        </div>
        <div className="nav-container-list">
        <span className="nav-container-list-span">ABOUT</span>
        <span className="nav-container-list-span">SPEAKERS</span>
        <span className="nav-container-list-span">SCHEDULE </span>
        <span className="nav-container-list-span">GALLERY</span>
        <span className="nav-container-list-span">LOCATION</span>
        <button type="button" className="btn btn-danger rounded-pill btn-lg nav-button ">REGISTER NOW</button>
      </div></div></div>
    </div>
)
}
export default Navbar;