// import { useState } from "react";
import { FormatDate } from "../../../util";

function EventData({ handleTabsclick, index, tabs, item }) {
  const [dateOfMonth, month, day] = FormatDate(item?.date)?.split(" ");
  console.log(dateOfMonth, month, day);

  return (
    <div
      id={index}
      onClick={() => handleTabsclick(index)}
      key={`event_${index}`}
      className={
        index === 0
          ? `col border container-eventschedule-body-grid-row1-box1 ${
              tabs === index
                ? "container-eventschedule-body-active"
                : "container-eventschedule-body-notactive"
            }`
          : index === 1
          ? `col border container-eventschedule-body-grid-row1-box2  ${
              tabs === index
                ? "container-eventschedule-body-active"
                : "container-eventschedule-body-notactive"
            }`
          : `col border container-eventschedule-body-grid-row1-box3  ${
              tabs === index
                ? "container-eventschedule-body-active"
                : "container-eventschedule-body-notactive"
            }`
      }
    >
      <p
        className={
          index === 0
            ? "container-eventschedule-body-grid-row1-box1-date"
            : index === 1
            ? "container-eventschedule-body-grid-row1-box2-date"
            : "container-eventschedule-body-grid-row1-box3-date"
        }
      >
        {dateOfMonth + " " + month}
      </p>
      <p
        className={
          index === 0
            ? "container-eventschedule-body-grid-row1-box1-day"
            : index === 1
            ? "container-eventschedule-body-grid-row1-box2-day"
            : "container-eventschedule-body-grid-row1-box3-day"
        }
      >
        {day}
      </p>
    </div>
  );
}

export default EventData;
