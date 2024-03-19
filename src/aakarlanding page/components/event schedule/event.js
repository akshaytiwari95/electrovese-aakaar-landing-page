
function Event({selectedTabList}){
    return selectedTabList?selectedTabList?.map((item,index)=><div key={index} className="row eventscheduleRows border-bottom"><div className="col-2 eventscheduleRowstime-box"><div className='eventscheduleRowstime'>{item?.eventTime}</div></div>
   {item?.person&&<div className="col-4 eventscheduleRowstime-card">{item?.person?.map((value,idx)=><div key={idx} className="card  eventscheduleRowstime-card-border  mb-3" >
    <div className="card-header bg-transparent  eventschedulecard-header"><div className="eventschedulecard-header_box"><img className="eventschedulecard-header_box-img"src={value?.image} alt="loading"/>
   </div> <div className="card-body  text-black eventschedulecard-title-box">
      <h5 className="eventschedulecard-title-box_title">{value?.personName}</h5>
      <h6 className="eventschedulecard-title-box_subtitle">{value?.member}</h6>
   
    </div></div></div>)}
  </div>}
  <div className={`col-6 ${item?.person?'eventscheduleRows-bodycard':'eventscheduleRows-bodycard-full'}`} > <div className={`card-body eventscheduleRows-bodycard-heading  text-black ${item?.person?'':'add-margin-bottom'}`}>
      <h5 className="card-title eventscheduleRows-bodycard-heading-welcome ">{item?.eventtopic}</h5>
      <p className="card-text eventscheduleRows-bodycard-heading-join ">{item?.eventSubtopic}</p>
    </div></div></div>):<div className="row box-color border-bottom">  <div className="col">user data not found</div></div>;

}
export default Event;