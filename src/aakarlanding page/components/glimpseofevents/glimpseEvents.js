import pic1 from"../../../img/gallery_1.png";
import pic2 from"../../../img/gallery_2.png";
import pic3 from"../../../img/gallery_3.png";
import pic4 from"../../../img/gallery_4.png";
import pic5 from"../../../img/gallery_5.png";
import pic6 from"../../../img/gallery_6.png";
import pic7 from"../../../img/gallery_7.png";
import pic8 from"../../../img/gallery_8.png";
import pic9 from"../../../img/gallery_9.png";
import GlimpseCard from "./glimpseCard";
const glimpsePics=[[pic1,pic2,pic3],[pic4,pic5,pic6],[pic7,pic8,pic9]]
function GlimpseEvents(){
    return(<div className="container-fluid">
        <div className="glimpseEvents-container"><div className="glimpseEvents-container-heading">Glimse of Our Events</div>
        <div className="glimpseEvents-container-body">
        <div className="container text-center">
  {glimpsePics.map((item,index)=><GlimpseCard key={index} pics={item}/>)}
</div>
            </div></div>
    </div>)
}
export default GlimpseEvents;