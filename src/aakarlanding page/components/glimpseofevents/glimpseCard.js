
function GlimpseCard({pics,index}){
    
    const [pic1,pic2,pic3]=[...pics];
    return( <div className="row glimpseEvents-container-body-row">
    <div key={index} className="col p-0 glimpseEvents-container-body-row-columns">
     <img className="w-100 glimpseEvents-container-body-row-images" src={pic1} alt="loading"/>
    </div>
    <div className="col p-0 glimpseEvents-container-body-row-columns">
    <img className="w-100 glimpseEvents-container-body-row-images" src={pic2} alt="loading"/>
    </div>
    <div className="col p-0 glimpseEvents-container-body-row-columns">
   <img className="w-100 glimpseEvents-container-body-row-images" src={pic3} alt="loading"/>
    </div>
  </div>)
}
export default GlimpseCard;