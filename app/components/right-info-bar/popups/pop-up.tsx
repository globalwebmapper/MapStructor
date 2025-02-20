import { GenericPopUpProps } from "@/app/models/popups/pop-up.model";
import { useState, useEffect } from "react";
// import moment from "moment";

const SliderPopUp = (props: GenericPopUpProps & { currDate?: moment.Moment }) => {
  const [renderedEntity, setRenderedEntity] = useState<string>("");
  const formattedDate = props.currDate ? props.currDate.format("YYYYMMDD") : "";
  
  // Debug: log the current props
  console.log("SliderPopUp rendered with currDate:", props.currDate, "formatted:", formattedDate);

  useEffect(() => {
    console.log("useEffect triggered with nid:", props.nid, "formattedDate:", formattedDate);
    if (!props.nid || !formattedDate) return;

    const url = `https://encyclopedia.nahc-mapping.org/rendered-export-single?nid=${props.nid}&date=${formattedDate}&_=${Date.now()}`;
    console.log("Fetching pop-up data from:", url);

    fetch(url, { cache: "no-store" })
      .then((response) => response.json())
      .then((res) => {
        console.log("Raw API response:", res);

        let html: string = res[0]?.rendered_entity || "No data available";
        const prefix = "https://encyclopedia.nahc-mapping.org";
        const pattern = /(<a\s+href=")([^"]+)(")/g;

        let modifiedHtmlString = `<h3 id="popupHeader">${props.layerName}</h3><hr><br/>` + html
          .replace(pattern, (_: any, p1: string, p2: string, p3: string) => {
            return p2.startsWith("http")
              ? p1 + p2 + p3
              : p1 + prefix + p2 + p3;
          })
          .replace(/(<a\s+[^>]*)(>)/g, (_: any, p1: string, p2: string) => {
            return p1 + ' target="_blank"' + p2;
          })
          .replace(/(<img.*src=")([^"]+)(")/g, (_: any, p1: string, p2: string, p3: string) => {
            return p2.startsWith("http")
              ? p1 + p2 + p3
              : p1 + prefix + p2 + p3;
          });

        const parser = new DOMParser();
        const doc = parser.parseFromString(modifiedHtmlString, "text/html");
        doc.querySelectorAll(".field.field--name-title.field--type-string.field--label-hidden").forEach(element => {
          const text = element.textContent || "";
          if (text) {
            element.textContent = text.substring(text.lastIndexOf("_") + 1);
          }
        });
        modifiedHtmlString = doc.body.innerHTML;
        console.log("Modified HTML for infobox:", modifiedHtmlString);
        setRenderedEntity(modifiedHtmlString);
      })
      .catch((error) => {
        console.error("Error fetching pop-up data:", error);
        setRenderedEntity("Error loading data");
      });
  }, [props.nid, formattedDate, props.layerName]);

  return (
    <div id="rightInfoBar" className="rightInfoBarBorder" style={{ zIndex: 10 }}>
      {renderedEntity === "" ? (
        <div id={`${props.type}SliderPopup`}>Loading...</div>
      ) : (
        <div
          id={`${props.type}SliderPopup`}
          dangerouslySetInnerHTML={{ __html: renderedEntity }}
        />
      )}
    </div>
  );
};

export default SliderPopUp;
