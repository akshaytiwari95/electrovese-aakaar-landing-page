import { useCallback, useEffect, useState } from "react";
import { useTimeConverter } from "../../../util";

function Timer({ wallpaperData }) {
  const [timeLeft, setTimeLeft] = useState(wallpaperData?.time_lef);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const { days, hours, minutes, seconds } = useTimeConverter(timeLeft)();
  

  return (
    <div className=" counter rounded">
      <div className="counter-boxes">
        <span className="text-white-50 counter-boxes-number">{days}</span>
        <span className="counter-boxes-text">days</span>
      </div>
      <div className="counter-boxes">
        <span className=" counter-boxes-number">{hours}</span>
        <span className=" counter-boxes-text">hours</span>
      </div>
      <div className="counter-boxes">
        <span className=" counter-boxes-number">{minutes}</span>
        <span className=" counter-boxes-text">minutes</span>
      </div>
      <div className="counter-boxes">
        <span className="text-w counter-boxes-number">{seconds}</span>
        <span className=" counter-boxes-text">seconds</span>
      </div>
    </div>
  );
}
export default Timer;
