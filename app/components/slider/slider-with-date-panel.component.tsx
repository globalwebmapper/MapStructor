import React, { useState, useRef, useEffect } from "react"; 
// Import moment for date manipulation
import moment from "moment";
import DatePanelComponent from "./date-panel/date-panel.component";

// Import CSS
import "../../slider-timeline-date.css";

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
  // Variable for tracking the date set by the user -- default to 01 Jan 1663
  const [currDate, setCurrDate] = useState<moment.Moment | null>(moment("1663-01-01", "YYYY-MM-DD")); 
  const [sliderValue, setSliderValue] = useState<number>(0); 
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showTimeSlideText, setShowTimeSlideText] = useState<boolean>(true); 
  const [sliderColor, setSliderColor] = useState<string>("gray"); // Start gray on page load
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
      : moment().year(newYear).dayOfYear(Math.min(dayOfYear + 1, totalDaysInYear));

    setCurrDate(newDate);
    props.callback(newDate);
  };

  const moveSlider = (positionX: number, sliderWidth: number) => {
    let position: number = Math.min((positionX / sliderWidth) * totalSliderSteps, totalSliderSteps - 1);
    position = Math.max(position, 0);
    setSliderValue(position);
    updateDate(position); 
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if(showTimeSlideText)
    {
      setShowTimeSlideText(false);
    }
    setIsDragging(true);
    setSliderColor("darkorange"); 
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
  }, 10); 

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", throttledMoveSlider);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", throttledMoveSlider);
    };
  }, [isDragging]);

  const handleTimelineClick = (e: React.MouseEvent) => {
    if(showTimeSlideText)
      {
        setShowTimeSlideText(false);
      }
    const slider = sliderRef.current;
    if (slider) {
      const rect = slider.getBoundingClientRect();
      const clickX = e.clientX - rect.left; 
      moveSlider(clickX, rect.width);
    }
  };

  useEffect(() => {
    setSliderValue(middleSliderPosition); 
    updateDate(middleSliderPosition); 
  }, [middleSliderPosition]);

  return (
    <div>
      {/* The blue box in the bottom right of the map screen that displays the date */}
      <DatePanelComponent currDate={currDate} />

      <div id="footer">
          <div id="slider">
            <div className="timeline" onClick={handleTimelineClick}>
              {/* Tick #1 -> 1633 */}
              <div className="year">
                <span id="ruler-date1">1633</span>
                <span className="timeline-ruler"></span>
              </div>
              {/* Tick #2 -> 1648 */}
              <div className="year">
                <span id="ruler-date2">1648</span>
                <span className="timeline-ruler"></span>
              </div>
              {
                showTimeSlideText ? 
                (
                  <div className="year">
                    <span id="ruler-date3">&nbsp; ⇦ &nbsp; TIME &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SLIDE &nbsp; ⇨ &nbsp; &nbsp; &nbsp; &nbsp;</span>
                    <span className="timeline-ruler"></span>
                  </div>
                )
                : // If the time slider has been moved, "TIME SLIDE" text will be hidden and replaced with "1663"
                (
                  <div className="year">
                    <span id="ruler-date3">1663</span>
                    <span className="timeline-ruler"></span>
                  </div>
                )
              }
              {/* Tick #4 -> 1677 */}
              <div className="year">
                <span id="ruler-date4">1677</span>
                <span className="timeline-ruler"></span>
              </div>
              {/* Tick #5 -> 1692 */}
              <div className="year">
                <span id="ruler-date5">1692</span>
                <span className="timeline-ruler"></span>
              </div>
            </div>
          </div>

        {/* The slider button itself */}
        <div
          id="horizontal-slider"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          className="slider-container-horizontal"
        >
          <div className="slider-track-horizontal"></div>
          <div
            className="slider-handle-horizontal"
            style={{ 
              left: `${(sliderValue / totalSliderSteps) * 100}%`, 
              backgroundColor: sliderColor 
            }} 
            onMouseEnter={() => setSliderColor(isDragging ? "darkorange" : "#007aff")} 
            onMouseLeave={() => setSliderColor(isDragging ? "darkorange" : "gray")} 
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SliderWithDatePanel;