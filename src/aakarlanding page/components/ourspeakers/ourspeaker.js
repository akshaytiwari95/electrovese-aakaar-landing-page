// import carouselData from "../../../carouselData";
// import OurspeakerSlide from "./ourspeakerSlide";
import BASE_URL from "../../../assests/constant";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormatDate } from "../../../util";
import { truncateString } from "../../../util";
import { renderListSpeakers } from "../../../util";

function Ourspeaker() {
  const [speakerState, setSpeakerState] = useState();

  useEffect(() => {
    axios
      .post(BASE_URL + "events/speakers/app", {
        event_id: "6506c66b16a405bd4498f3df",
      })
      .then((res) => {
        setSpeakerState(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="container-ourspeaker">
        <div className="container-ourspeaker-heading">Meet Our Speakers</div>
        <div
          id="carouselExample"
          className="carousel carousel-dark slide ourspeaker-slide"
        >
          <div className="carousel-indicators btn-indicators-box">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active btn-indicators"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              className="btn-indicators"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
              className="btn-indicators"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="3"
              className="btn-indicators"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="4"
              className="btn-indicators"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="5"
              className="btn-indicators"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="6"
              className="btn-indicators"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="7"
              className="btn-indicators"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <div className="d-block">
                <div className="active speaker-card-container ">
                  {speakerState?.response_obj
                    ?.slice(0, 3)
                    ?.map((item, index) => {
                      return (
                        <div
                          key={`carousel_${item?._id}}`}
                          className="card speaker-card-container-cards border mb-3"
                          style={{ width: "16rem" }}
                        >
                          <div className="card-header bg-transparent border ourspeaker">
                            <div className="ourspeaker-box">
                              <img
                                className="ourspeaker-box-img"
                                src={item?.s_image}
                                alt="loading"
                              />
                            </div>{" "}
                            <div className="card-body  text-black ourspeaker-box-title">
                              <h5 className="card-title speaker-title">
                                {item?.s_name}
                              </h5>
                              <h6 className="speaker-member">
                                {truncateString(
                                  item?.s_designation +
                                    " of " +
                                    item?.s_company,
                                  23
                                )}
                              </h6>
                              <h6 className="speaker-date">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="10"
                                  fill="currentColor"
                                  className="bi bi-cake2"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426" />
                                </svg>
                                {item?.events.length >= 1 &&
                                  `${FormatDate(item?.events?.[0]?.date,'speaker')} | ${
                                    item?.events?.[0]?.start_time
                                  }-${item?.events?.[0]?.end_time}`}
                              </h6>
                            </div>
                          </div>
                          <div className="card-body speaker-box-inside-border text-black">
                            <h5 className="card-title speaker-welcome">
                              {item?.events?.[0]?.eve_name}
                            </h5>
                            <p className="card-text speaker-join">
                              {truncateString(
                                item?.events?.[0]?.eve_description,
                                80
                              )}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            {renderListSpeakers(truncateString, speakerState, FormatDate)}
          </div>
          <button
            className="carousel-control-prev button-slider-1 "
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon button-slider-icons "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next button-slider-2"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon button-slider-icons"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Ourspeaker;
