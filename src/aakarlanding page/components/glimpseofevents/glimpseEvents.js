// import pic1 from"../../../img/gallery_1.png";
// import pic2 from"../../../img/gallery_2.png";
// import pic3 from"../../../img/gallery_3.png";
// import pic4 from"../../../img/gallery_4.png";
// import pic5 from"../../../img/gallery_5.png";
// import pic6 from"../../../img/gallery_6.png";
// import pic7 from"../../../img/gallery_7.png";
// import pic8 from"../../../img/gallery_8.png";
// import pic9 from"../../../img/gallery_9.png";
import GlimpseCard from "./glimpseCard";
import axios from "axios";
import BASE_URL from "../../../assests/constant";
import { useEffect,useState } from "react";
// const glimpsePics=[[pic1,pic2,pic3],[pic4,pic5,pic6],[pic7,pic8,pic9]]
function GlimpseEvents(){
  const [glimpsedata,setGlimpseData] =useState();
  const showcards=()=>{
    const row=[];
    for (let i=0;i<=3;i++){
      let counter=0;
     
   row[i]  = (<div className="row glimpseEvents-container-body-row" key={`glimpseEvents_${i}`} >
        {glimpsedata?.[0]?.images?.slice(counter,counter+4)?.map((item,index)=><GlimpseCard item={item} index={index}/>)}
      </div>)
      counter+=4;
   

    }
    return row;
  }
 
    useEffect(() => {
        axios
          .post(BASE_URL + "events/albums", {
            event_id: "6506c66b16a405bd4498f3df",
          })
          .then((res) => {
            setGlimpseData(res?.data?.response_obj
              );
          });
      }, []);
    return(<div className="container-fluid">
        <div className="glimpseEvents-container"><div className="glimpseEvents-container-heading">Glimse of Our Events</div>
        <div className="glimpseEvents-container-body">
        <div className="container text-center">
  {showcards()}
</div>
            </div></div>
    </div>)
}
export default GlimpseEvents;