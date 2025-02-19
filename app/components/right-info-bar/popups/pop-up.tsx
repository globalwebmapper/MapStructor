import { GenericPopUpProps } from "@/app/models/popups/pop-up.model";
import { useState, useEffect } from "react";
// import moment from "moment";

const SliderPopUp = (props: GenericPopUpProps & { currDate?: moment.Moment }) => {
  const [renderedEntity, setRenderedEntity] = useState<string>("");

  // Format the current date string; if not provided, remain empty.
  const formattedDate = props.currDate ? props.currDate.format("YYYYMMDD") : "";

  useEffect(() => {
    if (!props.nid || !formattedDate) return;

    // Build the URL and force a no-cache request with a unique parameter.
    const url = `https://encyclopedia.nahc-mapping.org/rendered-export-single?nid=${props.nid}&date=${formattedDate}&_=${Date.now()}`;
    console.log("Fetching pop-up data from:", url);

    fetch(url, { cache: "no-store" })
      .then((response) => response.json())
      .then((res) => {
        // Get the raw HTML from the response.
        let html: string = res[0]?.rendered_entity || "No data available";
        const prefix = "https://encyclopedia.nahc-mapping.org";
        const pattern = /(<a\s+href=")([^"]+)(")/g;
        // Prepend a header with the layer name.
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

        // Parse the HTML so we can adjust any targeted elements.
        const parser = new DOMParser();
        const doc = parser.parseFromString(modifiedHtmlString, "text/html");
        doc.querySelectorAll(".field.field--name-title.field--type-string.field--label-hidden").forEach(element => {
          const text = element.textContent || "";
          if (text) {
            element.textContent = text.substring(text.lastIndexOf("_") + 1);
          }
        });

        modifiedHtmlString = doc.body.innerHTML;
        setRenderedEntity(modifiedHtmlString);
      })
      .catch((error) => {
        console.error("Error fetching pop-up data:", error);
        setRenderedEntity("Error loading data");
      });
  }, [props.nid, formattedDate, props.layerName]);

  return (
    // IMPORTANT: Ensure that your CSS for this container does not block your map events.
    // For example, if needed, adjust the z-index or pointer-events.
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
