// import itj_logo from "../../../img/itj_logo.png";
// import srtpg from "../../../img/srtepc_logo.png";
// import shahi from "../../../img/shahi_logo.png";
// import communion from "../../../img/communion_logo.png";
// import messe from "../../../img/messe_frankfurt.png";
// import Cardslider from "./cardSlider";
import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../../assests/constant";

import { renderListSponsors } from "../../../util";
// const cardsdata = [itj_logo, srtpg, shahi, communion, messe];
function Cards() {
  const [card_Data, setCardData] = useState();

  useEffect(() => {
    axios
      .post(BASE_URL + "/events/sponsors/app", {
        event_id: "6506c66b16a405bd4498f3df",
      })
      .then((res) => {
        setCardData(res?.data?.response_obj);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div
        id="carouselExample-card"
        className="carousel carousel-dark slide container-cards-outer"
      >
        <div className="container-cards  carousel-inner">
          <div className="carousel-item active container-cards-box ">
            <div className="d-block">
              <div className="d-flex card-img-container">
                {card_Data?.slice(0, 5)?.map((item, index) => (
                  <div
                    key={`card_${index}`}
                    className="card card-imgx"
                    style={{ width: "25rem", height: "" }}
                  >
                    <img
                      className="card-images card-img-top"
                      src={item?.sponsors[0]?.img_url}
                      alt="loading"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {renderListSponsors(card_Data)}
        </div>
        <button
          class="carousel-control-prev button-slider-sponsors-1"
          type="button"
          data-bs-target="#carouselExample-card"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon button-slider-icons "
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next button-slider-sponsors-2"
          type="button"
          data-bs-target="#carouselExample-card"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon button-slider-icons "
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Cards;
