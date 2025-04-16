// Import various things from React
import React, { useState, useRef, useEffect } from "react";
// Import moment for date manipulation
import moment from "moment";
// Import the stuff for the blue box in the bottom right of the map screen that displays the date
import DatePanelComponent from "./date-panel/date-panel.component";
// Import CSS
import "@/app/slider-timeline-date.css";

// Custom debounce definition
const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

type SliderWithDatePanelProps = {
  callback: (date: moment.Moment | null) => void;
};

const SliderWithDatePanel: React.FC<SliderWithDatePanelProps> = (props) => {
  const [currDate, setCurrDate] = useState<moment.Moment | null>(moment("1663-01-01", "YYYY-MM-DD"));
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showTimeSlideText, setShowTimeSlideText] = useState<boolean>(true);
  const [sliderColor, setSliderColor] = useState<string>("#555555");
  const [timelineColor, setTimelineColor] = useState<string>("rgb(209, 236, 255)");
  const sliderRef = useRef<HTMLDivElement>(null);

  const minYear = 1626;
  const maxYear = 1700;
  const totalYears = maxYear - minYear + 1;
  const totalDaysInYear = 365;
  const totalSliderSteps = totalYears * totalDaysInYear;

  const calculateSliderPosition = (date: moment.Moment) => {
    const year = date.year();
    const dayOfYear = date.dayOfYear();
    const yearOffset = year - minYear;
    return (yearOffset * totalDaysInYear) + dayOfYear;
  };

  const middleYear = Math.floor((minYear + maxYear) / 2);
  const middleDate = moment(`${middleYear}-01-01`, "YYYY-MM-DD");
  const middleSliderPosition = calculateSliderPosition(middleDate);

  const updateDate = (position: number) => {
    const yearOffset = position / totalDaysInYear;
    const newYear = minYear + Math.floor(yearOffset);
    const dayOfYear = Math.round((yearOffset % 1) * totalDaysInYear);
    const newDate = newYear === maxYear
      ? moment("1700-01-01", "YYYY-MM-DD")
      : moment().year(newYear).dayOfYear(Math.min(dayOfYear, totalDaysInYear));

    setCurrDate(newDate);
  };

  const commitDateChange = () => {
    if (currDate) {
      props.callback(currDate);
    }
  };

  const handleTimelineClick = (e: React.MouseEvent) => {
    if (showTimeSlideText) {
      setShowTimeSlideText(false);
    }

    const slider = sliderRef.current;
    if (slider) {
      const rect = slider.getBoundingClientRect();
      moveSlider(e.clientX - rect.left, rect.width);
      commitDateChange();
    }
  };

  const moveSlider = (positionX: number, sliderWidth: number) => {
    let position: number = Math.min((positionX / sliderWidth) * totalSliderSteps, totalSliderSteps - 1);
    position = Math.max(position, 0);
    setSliderValue(position);
    updateDate(position);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (showTimeSlideText) {
      setShowTimeSlideText(false);
    }
    setIsDragging(true);

    const slider = sliderRef.current;
    if (slider) {
      const rect = slider.getBoundingClientRect();
      moveSlider(e.clientX - rect.left, rect.width);
    }
  };

  const throttledMoveSlider = debounce((e: MouseEvent) => {
    if (isDragging && sliderRef.current) {
      const slider = sliderRef.current;
      const rect = slider.getBoundingClientRect();
      moveSlider(e.clientX - rect.left, rect.width);
    }
  }, 6);

  const handleMouseUp = () => {
    setIsDragging(false);
    commitDateChange();
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", throttledMoveSlider);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", throttledMoveSlider);
    };
  }, [isDragging]);

  useEffect(() => {
    setSliderValue(middleSliderPosition);
    updateDate(middleSliderPosition);
  }, [middleSliderPosition]);

  const hoverTimeline = () => {
    setTimelineColor("rgb(186, 221, 249)");
    setSliderColor("red");
  };

  const offHoverTimeline = () => {
    setTimelineColor("rgb(209, 236, 255)");
    setSliderColor("#555555");
  };

  const hoverSlider = () => {
    setTimelineColor("rgb(209, 236, 255)");
    setSliderColor(isDragging ? "#f58400" : "#087CA4");
  };

  const offHoverSlider = () => {
    setTimelineColor(isDragging ? "rgb(209, 236, 255)" : "rgb(186, 221, 249)");
    setSliderColor(isDragging ? "#f58400" : "red");
  };

  return (
    <div>
      <DatePanelComponent currDate={currDate} />
      <div id="footer"
        onMouseEnter={hoverTimeline}
        onMouseLeave={offHoverTimeline}
      >
        <div id="slider"
          style={{
            backgroundColor: timelineColor
          }}
        >
          <div className="timeline" onClick={handleTimelineClick}>
            <div className="year">
              <span id="ruler-date1">1633</span>
              <span className="timeline-ruler"></span>
            </div>
            <div className="year">
              <span id="ruler-date2">1648</span>
              <span className="timeline-ruler"></span>
            </div>
            {
              showTimeSlideText ?
                (
                  <div className="year">
                    <span id="ruler-date3">&nbsp;  ⇦ &nbsp; TIME &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SLIDE &nbsp; ⇨ &nbsp; &nbsp; &nbsp; &nbsp;</span>
                    <span className="timeline-ruler"></span>
                  </div>
                )
                :
                (
                  <div className="year">
                    <span id="ruler-date3">1663</span>
                    <span className="timeline-ruler"></span>
                  </div>
                )
            }
            <div className="year">
              <span id="ruler-date4">1677</span>
              <span className="timeline-ruler"></span>
            </div>
            <div className="year">
              <span id="ruler-date5">1692</span>
              <span className="timeline-ruler"></span>
            </div>
          </div>
        </div>

        <div
          id="horizontal-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          className="slider-container-horizontal"
        >
          <div
            className="slider-handle-horizontal"
            style={{
              left: `${(sliderValue / totalSliderSteps) * 100}%`,
              backgroundColor: sliderColor
            }}
            onMouseEnter={hoverSlider}
            onMouseLeave={offHoverSlider}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SliderWithDatePanel;
