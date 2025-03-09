// Import various things from React
import React, { useState, useRef, useEffect } from "react"; 
// Import moment for date manipulation
import moment from "moment";
// Import the stuff for the blue box in the bottom right of the map screen that displays the date
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

// Define the type with one field -- callback, which is a function that takes a moment.Moment or null and returns void
type SliderWithDatePanelProps = {
  callback: (date: moment.Moment | null) => void;
};



// ---------------------------------------- Main Function ----------------------------------------



// props is the parameter that is passed with a type of SliderWithDatePanelProps
const SliderWithDatePanel: React.FC<SliderWithDatePanelProps> = (props) => {
  // Variable for tracking the date set by the user -- default to 01 Jan 1663
  const [currDate, setCurrDate] = useState<moment.Moment | null>(moment("1663-01-01", "YYYY-MM-DD"));
  // Essentially a numerical value for where the slider button is
  const [sliderValue, setSliderValue] = useState<number>(0);
  // Whether the user is dragging the slider button or not
  const [isDragging, setIsDragging] = useState<boolean>(false);
  // The time slider shows "TIME SLIDE" until the user moves it
  const [showTimeSlideText, setShowTimeSlideText] = useState<boolean>(true);
  // The slider button starts off as gray
  const [sliderColor, setSliderColor] = useState<string>("#555555");
  // The color starts off as a more pale blue, but on hover changes to a darker blue
  const [timelineColor, setTimelineColor] = useState<string>("rgb(209, 236, 255)");
  // Construct the div element for the slider button
  const sliderRef = useRef<HTMLDivElement>(null);

  // Static variables for dates (based on the original MENY site)
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

  // Set the original slider position to the very middle of the timeline
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
    // Basically if "TIME SLIDE" is showing, hide it
    if(showTimeSlideText) {
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



  // ---------------------------------------- Return Statement ----------------------------------------



  return (
    <div>
      {/* The blue box in the bottom right of the map screen that displays the date */}
      <DatePanelComponent currDate={currDate} />

      {/* The whole bottom part -- the timeline */}
      <div id="footer"
        onMouseEnter={() => {
          setTimelineColor("rgb(186, 221, 249)");
          setSliderColor("red");
        }} 
        onMouseLeave={() => {
          setTimelineColor("rgb(209, 236, 255)");
          setSliderColor("#555555");
        }}
      >
        <div id="slider"
          style={{
            backgroundColor: timelineColor 
          }}
        >
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
                  <span id="ruler-date3">&nbsp;  ⇦ &nbsp; TIME &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SLIDE &nbsp; ⇨ &nbsp; &nbsp; &nbsp; &nbsp;</span>
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
          {/* I believe this is not utilized, therefore useless */}
          {/* <div className="slider-track-horizontal"></div> */}

          {/* The style of the button slider */}
          <div
            className="slider-handle-horizontal"
            style={{ 
              left: `${(sliderValue / totalSliderSteps) * 100}%`, 
              backgroundColor: sliderColor 
            }} 
            onMouseEnter={() => {
              setTimelineColor("rgb(209, 236, 255)");
              setSliderColor(isDragging ? "#f58400" : "#087CA4")
            }} 
            onMouseLeave={() => {
              setTimelineColor(isDragging ? "rgb(209, 236, 255)" : "rgb(186, 221, 249)");
              setSliderColor(isDragging ? "#f58400" : "red")
            }} 
          ></div>
        </div>
      </div>
    </div>
  );
};

// Return the div element
export default SliderWithDatePanel;