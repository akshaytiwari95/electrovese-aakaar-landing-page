import { useCallback } from "react";
import Cardslider from "./aakarlanding page/components/cards/cardSlider";
import OurspeakerSlide from "./aakarlanding page/components/ourspeakers/ourspeakerSlide";
export const useTimeConverter = (timeLeft) => {
  const convertTime = useCallback(() => {
    const days = Math.floor(timeLeft / (3600 * 24));
    const hours = Math.floor((timeLeft % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = Math.floor(timeLeft % 60);

    return timeLeft > 0
      ? {
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [timeLeft]);
  return convertTime;
};
export const renderListSponsors = (card_Data) => {
  const sliders = [];
  let sliderBegin = 5;
  for (let i = 0; i < 3; i++) {
    sliders.push(
      <Cardslider
        key={`cardslider_${i}`}
        card_Data={card_Data}
        sliderBegin={sliderBegin}
      />
    );
    sliderBegin = sliderBegin + 5;
  }
  return sliders;
};
export const renderListSpeakers = (
  truncateString,
  speakerState,
  FormatDate
) => {
  const sliders = [];
  let sliderBegin = 3;
  for (let i = 0; i < 7; i++) {
    sliders.push(
      <OurspeakerSlide
        key={`ourspeaker_slider_${i}`}
        truncateString={truncateString}
        slider_Data={speakerState}
        sliderBegin={sliderBegin}
        FormatDate={FormatDate}
      />
    );
    sliderBegin = sliderBegin + 3;
  }
  return sliders;
};
export const FormatDate = (unFormatedDate, nameOfComponent) => {
  const formattedDate =
    unFormatedDate &&
    `${unFormatedDate?.split("/")?.[2]}/${unFormatedDate?.split("/")?.[1]}/${
      unFormatedDate?.split("/")?.[0]
    }`;

  const date = formattedDate && new Date(formattedDate);

  const options = { weekday: "long", month: "long" };
  const dateOfMonth = date && date.getDate();
  const [month, day] =
    date && new Intl.DateTimeFormat("en-US", options).format(date)?.split(" ");
  console.log(month, day);

  return nameOfComponent === "speaker"
    ? `${dateOfMonth} ${month}`
    : `${dateOfMonth} ${month} ${day}`;
};

export const truncateString = (text, size) => {
  let truncString;
  if (size === 80) {
    truncString = text?.length > 80 ? text?.slice(0, 80) + "..." : text;
  } else if (size === 23) {
    truncString = text?.length > 23 ? text?.slice(0, 23) + "..." : text;
  }

  return truncString;
};
