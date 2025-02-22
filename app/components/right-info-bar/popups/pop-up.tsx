import { GenericPopUpProps } from "@/app/models/popups/pop-up.model";
import { useState, useEffect, useRef } from "react";

const SliderPopUp = (props: GenericPopUpProps) => {
    const [renderedEntities, setRenderedEntities] = useState<{ nid: string | number, content: string }[]>([]);
    const previousEntitiesRef = useRef<{ nid: string | number, content: string }[]>([]); // Persist previous state

    const nid: number | string | null = props.nid ?? null;

    useEffect(() => {
        if (!nid) {
            console.error("Error: 'nid' is missing. Ensure the feature parameter is provided.");
            return;
        }

        fetch(`https://encyclopedia.nahc-mapping.org/rendered-export-single?nid=${nid}`)
            .then((buffer) => buffer.json())
            .then((res) => {
                const newEntity = {
                    nid: nid,
                    content: res[0]?.rendered_entity ?? ""
                };

                setRenderedEntities((prevEntities) => {
                    if (props.type === "land_grant") {
                        const updatedEntities = [...prevEntities, newEntity]; // Stack new land grant
                        previousEntitiesRef.current = updatedEntities; // Persist stack
                        return updatedEntities;
                    } else {
                        return [newEntity]; // Replace for events
                    }
                });
            })
            .catch(() => {
                console.error("Error: Failed to fetch data for nid:", nid);
                if (props.type === "event") {
                    setRenderedEntities([]);
                }
            });
    }, [nid]);

    return (
        <div id='rightInfoBar' className='rightInfoBarBorder'>
            {previousEntitiesRef.current.map((entity) => {
                const prefix = "https://encyclopedia.nahc-mapping.org";
                let html = entity.content;

                if (html) {
                    html = html
                        .replace(/(<a\s+href=")([^"]+)(")/g, (_, p1, p2, p3) => p1 + (p2.startsWith("http") ? p2 : prefix + p2) + p3)
                        .replace(/(<a\s+[^>]*)(>)/g, (_, p1, p2) => p1 + ' target="_blank"' + p2)
                        .replace(/(<img.*src=")([^"]+)(")/g, (_, p1, p2, p3) => p1 + (p2.startsWith("http") ? p2 : prefix + p2) + p3);

                    let parser = new DOMParser();
                    let doc = parser.parseFromString(html, 'text/html');
                    let elements = doc.querySelectorAll('.field.field--name-title.field--type-string.field--label-hidden');
                    
                    elements.forEach((element) => {
                        let text = element.textContent ?? '';
                        if (text) {
                            let newText = text.substring(text.lastIndexOf('_') + 1);
                            element.textContent = newText;
                        }
                    });

                    html = doc.body.innerHTML;
                }

                return (
                    <div key={entity.nid} className="slider-popup">
                        <h3 id="popupHeader">{props.layerName}</h3>
                        <hr />
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                );
            })}
        </div>
    );
};

export default SliderPopUp;
