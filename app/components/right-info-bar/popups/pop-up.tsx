import { GenericPopUpProps } from "@/app/models/popups/pop-up.model";
import { useState, useEffect } from "react";

const SliderPopUp = (props: GenericPopUpProps) => {
    const [renderedEntities, setRenderedEntities] = useState<
        { nid: number | string; content: string }[]
    >([]);
    const [lastNid, setLastNid] = useState<number | string | null>(null);

    const nid: number | string | null = props.nid ?? null;

    useEffect(() => {
        if (nid && nid !== lastNid) {
            fetch(`https://encyclopedia.nahc-mapping.org/rendered-export-single?nid=${nid}`)
                .then((buffer) => buffer.json())
                .then((res) => {
                    const newEntity = { nid, content: res[0].rendered_entity };

                    setRenderedEntities((prevEntities) => {
                        if (props.type === "blue") {
                            return [newEntity];
                        } else {
                            return [...prevEntities, newEntity];
                        }
                    });

                    setLastNid(nid);
                })
                .catch((err) => console.error("Error fetching popup content:", err));
        }
    }, [nid, lastNid, props.type]);

    return (
        <>
            {renderedEntities.map((entity) => (
                <div
                    key={entity.nid}
                    className="absolute top-[82px] right-0 max-h-[calc(100%-230px)] overflow-auto bg-white z-50 w-[270px] p-4 rounded-md shadow-lg"
                >
                    <div dangerouslySetInnerHTML={{ __html: entity.content }} />
                </div>
            ))}
        </>
    );
};

export default SliderPopUp;
