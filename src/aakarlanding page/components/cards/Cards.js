import itj_logo from "../../../img/itj_logo.png";
import srtpg from "../../../img/srtepc_logo.png";
import shahi  from "../../../img/shahi_logo.png";
import communion from "../../../img/communion_logo.png";
import messe from  "../../../img/messe_frankfurt.png";
const cardsdata=[itj_logo,srtpg,shahi,communion,messe];
function Cards(){
    return(<div className="container-fluid"><div className="container-cards d-flex">
     { cardsdata.map((item,index)=><div key={index}className="card" style={{width:"25rem",height:""}}>
  <img className="card-images card-img-top"src={item}  alt="..."/>
</div>)}
</div>
</div>

    )
}
export default Cards;