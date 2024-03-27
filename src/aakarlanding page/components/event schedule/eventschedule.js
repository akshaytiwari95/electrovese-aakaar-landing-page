import { useCallback, useMemo, useState, useEffect } from "react";
import { eventData } from "../../../eventData";
import Event from "./event";
import EventData from "./EventData";
import EventApi from "../../../eventData";
import axios from "axios";
import BASE_URL from "../../../assests/constant";

function Eventschedule() {
  const [tabs, setTabs] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const [eventState, setEventState] = useState();
  useEffect(() => {
    axios
      .post(BASE_URL + "events/schedule/app", {
        event_id: "6506c66b16a405bd4498f3df",
      })
      .then((res) => {
        setEventState(res?.data?.response_obj);
      });
  }, []);
  
  const handleViewClick = useCallback(
    () => setViewAll((prev) => !prev),
    [viewAll, setViewAll]
  );
  const selectedTabList = useMemo(() => {
    const selectedEventData = eventState?.find((item, index) => index === tabs);
    
    return viewAll
      ? selectedEventData?.events
      : selectedEventData?.events?.slice(0, 4);
  }, [tabs, viewAll,eventState]);
  const handleTabsclick = (value) => {
    setTabs((prev) => value);
  };

  return (
    <div className="container-fluid">
      <div className="container-eventschedule">
        <div className="container-eventschedule-heading">Event Schedule</div>
        <div className="container-eventschedule-body">
          <div className="container text-center container-eventschedule-body-grid">
            <div className="row ">
              {eventState?.map((item, index) => {
                return (
                  <EventData
                    handleTabsclick={handleTabsclick}
                    index={index}
                    item={item}
                    key={`events_${index}`}
                    tabs={tabs}
                  />
                );
              })}
            </div>
            <Event selectedTabList={selectedTabList} />
            <div className="row event-schedule-button-box">
              <button
                onClick={handleViewClick}
                type="button"
                className={`event-schedule-button-box-button btn btn-danger rounded-pill wallpaper-btn-2 ${
                 selectedTabList?.length>=4? "button-show" : "button-hide"
                }`}
              >
                {viewAll ? "VIEW LESS" : "VIEW ALL"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Eventschedule;
