import { GenericPopUpProps } from "@/app/models/popups/pop-up.model";
import { useState, useEffect } from "react";
import moment from "moment";

type SliderPopUpProps = GenericPopUpProps & {
  currDate: moment.Moment | null;
};

const SliderPopUp: React.FC<SliderPopUpProps> = ({ currDate, ...props }) => {
  const [renderedEntity, setRenderedEntity] = useState<string | null>(null);

  useEffect(() => {
    if (!currDate) return;

    // Fetch data dynamically when currDate changes
    const formattedYear = currDate.year();
    fetch(`https://encyclopedia.nahc-mapping.org/rendered-export-single?nid=${props.nid}&year=${formattedYear}`)
      .then((res) => res.json())
      .then((data) => {
        setRenderedEntity(data[0]?.rendered_entity || "No data available for this year");
      })
      .catch(() => {
        setRenderedEntity("Error fetching data");
      });
  }, [currDate, props.nid]);

  return (
    <div className="popup-container">
      <h3 id="popupHeader">{props.layerName}</h3>
      <hr />
      {renderedEntity ? (
        <div dangerouslySetInnerHTML={{ __html: renderedEntity }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SliderPopUp;
