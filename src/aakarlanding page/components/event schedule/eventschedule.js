import { useCallback,  useMemo, useState } from 'react';
import eventData from '../../../eventData';
import Event from './event';
function Eventschedule(){
  
  
 
  const [tabs,setTabs] =useState(0);
  const [viewAll,setViewAll]=useState(false);
 const handleViewClick = useCallback(()=>setViewAll((prev)=>!prev),[viewAll,setViewAll]);
 const selectedTabList =useMemo(()=>{
 const selectedEventData=eventData.find((item,index)=>index===tabs);
 return viewAll?selectedEventData?.event:selectedEventData?.event?.slice(0,4);
 },[tabs,viewAll])
  const handleTabsclick=(value)=>{
    setTabs((prev)=>value);
    
    }
   

  

    return(<div className="container-fluid">
        <div className="container-eventschedule">
          <div className="container-eventschedule-heading">Event Schedule</div>
          <div className="container-eventschedule-body" ><div className="container text-center container-eventschedule-body-grid">
  
          <div className="row ">{ eventData?.map((item,index)=>{return(<div id={index}onClick={()=>handleTabsclick(index)} key={index} className={index===0?`col-4 border container-eventschedule-body-grid-row1-box1 ${tabs===index?"container-eventschedule-body-active":"container-eventschedule-body-notactive"}`:index===1?`col-4 border container-eventschedule-body-grid-row1-box2  ${tabs===index?"container-eventschedule-body-active":"container-eventschedule-body-notactive"}`:`col-4 border container-eventschedule-body-grid-row1-box3  ${tabs===index?"container-eventschedule-body-active":"container-eventschedule-body-notactive"}`}>
    <p className={index===0?"container-eventschedule-body-grid-row1-box1-date":index===1?"container-eventschedule-body-grid-row1-box2-date":"container-eventschedule-body-grid-row1-box3-date"}>{item?.date}</p><p className={index===0?"container-eventschedule-body-grid-row1-box1-day":index===1?"container-eventschedule-body-grid-row1-box2-day":"container-eventschedule-body-grid-row1-box3-day"}>{item?.day}</p>
     </div>

 )})}</div>
 <Event selectedTabList={selectedTabList}/>
 <div className="row event-schedule-button-box"><button onClick={handleViewClick} type='button' className={`event-schedule-button-box-button btn btn-danger rounded-pill wallpaper-btn-2 ${selectedTabList?'button-show':'button-hide'}`}>{viewAll?"VIEW LESS":"VIEW ALL"}</button></div>
    
 
</div></div>
            </div></div>)
}
export default  Eventschedule;