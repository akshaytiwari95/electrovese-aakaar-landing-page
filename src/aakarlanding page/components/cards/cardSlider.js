function Cardslider({ card_Data, sliderBegin }) {
  return (
    <div class="carousel-item  container-cards-box">
      {" "}
      <div className="d-block">
        <div className="d-flex card-img-container">
          {" "}
          {card_Data
            ?.slice(sliderBegin, sliderBegin + 5)
            ?.map((item, index) => (
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
  );
}
export default Cardslider;
