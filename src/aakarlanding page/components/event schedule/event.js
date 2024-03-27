function Event({ selectedTabList }) {
  return selectedTabList ? (
    selectedTabList?.map((item, index) => (
      <div
        key={`event-${index}`}
        className="row eventscheduleRows border-bottom"
      >
        <div className="col-2 eventscheduleRowstime-box">
          <div className="eventscheduleRowstime">
            {item?.start_time_text + "-" + item?.end_time_text}
          </div>
        </div>
        {item?.speakers?.length > 0 && (
          <div className="col-4 eventscheduleRowstime-card">
            {item?.speakers?.map((value, idx) => (
              <div
                key={idx}
                className="card  eventscheduleRowstime-card-border  mb-3"
              >
                <div className="card-header bg-transparent  eventschedulecard-header">
                  <div className="eventschedulecard-header_box">
                    <img
                      className="eventschedulecard-header_box-img"
                      src={value?.s_image}
                      alt="loading"
                    />
                  </div>{" "}
                  <div className="card-body  text-black eventschedulecard-title-box">
                    <h5 className="eventschedulecard-title-box_title">
                      {value?.s_name}
                    </h5>
                    <h6 className="eventschedulecard-title-box_subtitle">
                      {value?.s_designation}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div
          className={`col-6 ${
            item?.speakers?.length > 0
              ? "eventscheduleRows-bodycard"
              : "eventscheduleRows-bodycard-full"
          }`}
        >
          {" "}
          <div
            className={`card-body eventscheduleRows-bodycard-heading  text-black ${
              item?.speakers?.length > 0 ? "" : "add-margin-bottom"
            }`}
          >
            <h5 className="card-title eventscheduleRows-bodycard-heading-welcome ">
              {item?.eve_title}
            </h5>
            <p className="card-text eventscheduleRows-bodycard-heading-join ">
              {item?.eve_description}
            </p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="row box-color border-bottom">
      {" "}
      <div className="col event-data-absent">user data not found</div>
    </div>
  );
}
export default Event;
