function GlimpseCard({ item, index }) {
  // const [pic1, pic2, pic3] = [...pics];
  return (
    <div
        key={`glimpse_card${index}`}
        className="col p-0 glimpseEvents-container-body-row-columns"
      >
        <img
          className="w-100 glimpseEvents-container-body-row-images"
          src={item}
          alt="loading"
        />
      </div>
  );
}
export default GlimpseCard;
