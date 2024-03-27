import axios from "axios";
import { useEffect, useState } from "react";
import BASE_URL from "../../../assests/constant";
import Timer from "./timer";
function Wallpaper() {
  const [wallpaperData, setWallpaperData] = useState();

  useEffect(() => {
    axios
      .post(BASE_URL + "home", {
        event_id: "6506c66b16a405bd4498f3df",
      })
      .then((res) => {
       
        setWallpaperData(res?.data?.response_obj);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container-fluid">
      <div className="wallpaper-container">
        <div className="wallpaper-container-container_1">
          <div className="wallpaper-container-container_1-box">
            <div className=" rounded-pill  wallpaper-btn-1">
              20-22 june |Eskay Resorts,Mumbai
            </div>
            <p className="wallpaper-container-container_1-box_text">
              Aakar 2024 action packed team building event !
            </p>
            {wallpaperData?.show_timer && (
              <Timer wallpaperData={wallpaperData} />
            )}
            <button
              type="button"
              className="btn btn-danger rounded-pill btn-lg wallpaper-btn-2"
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wallpaper;
