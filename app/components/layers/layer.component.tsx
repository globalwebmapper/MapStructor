import { SectionLayer, SectionLayerItem } from "@/app/models/layers/layer.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { faMinusSquare, faPlusSquare, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faCrosshairs, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { getFontawesomeIcon } from "@/app/helpers/font-awesome.helper";
import { FontAwesomeLayerIcons } from "@/app/models/font-awesome.model";
import { MapZoomProps } from "@/app/models/maps/map.model";
import { layer } from "@fortawesome/fontawesome-svg-core";

type LayerProps = {
    item: SectionLayerItem,
    activeLayerCallback: (activeLayers: string[]) => void,
    activeLayers: string[],
    openWindow: () => void,
    editFormVisibleCallback: (isOpen: boolean) => void,
    mapZoomCallback:(zoomProps: MapZoomProps) => void,
    fetchLayerDataCallback: (id: string) => void,
    afterSubmit: () => void,
    // Removed upperCheckbox - not needed
    authToken: string,
    inPreviewMode: boolean
}

/**
 * Layer is a functional component that renders a single graphical
 * layer within a layer group. It provides features such as toggling the visibility of 
 * the layer, changing the layer's appearance, and rearranging the layer's order within its layer group.
 */
const Layer = (props: LayerProps) => { // Renamed from SectionLayerGroupItemComponent to simply Layer for clarity.
    const [showEditorOptions, setShowEditorOptions] = useState<boolean>(false);

    /**
     * Check if the user is authenticated and if the page is in preview mode.
     * If both conditions are true, show the editor options (edit layer, move layer up/down)
     */
    useEffect(() => {
        const isAuthed: boolean = (props.authToken ?? '') != '';
        const inPreviewMode: boolean = props.inPreviewMode ?? false;

        setShowEditorOptions(isAuthed && !inPreviewMode);
    }, [props.authToken, props.inPreviewMode])

    /**
     * Handles the checkbox toggle event by adding or removing the layer from the active layer list.
     */
    const toggleLayerVisibility = () => {
        if (props.item.layerId) {
            if (props.activeLayers.includes(props.item.layerId)) {
                props.activeLayerCallback(props.activeLayers.filter((layerId) => layerId !== props.item.layerId));
            }
            else {
                props.activeLayerCallback([...props.activeLayers, props.item.layerId]);
            }
        }
    }

    /**
     * Ensures that a layer is added to the active layers list by default if it is marked
     * as enabled by default.
     */
    // Unnecessary with updated code
    // const activateDefaultLayer = () => {
    //     if (props.item.layerId && props.item.enableByDefault)
    //     {
    //         props.activeLayerCallback([...props.activeLayers, props.item.layerId]);
    //     }
    // }

    // useEffect(() => {
    //     activateDefaultLayer();
    // }, []);

    /**
     * Moves the layer up in the layer group by one spot, causing it to be rendered after the layer now below.
     * This is done by calling the API endpoint /api/LayerData/Rearrange/Up/:id.
     * @param id The ID of the layer to move up in the layer group.
     */
    const moveLayerUp = async (id: string) => {
        try {
            await fetch('/api/LayerData/Rearrange/Up/' + id, {
                method: 'PUT',
                headers: {
                    authorization: props.authToken,
                    "Content-Type": "application/json",
                },
            });
        }
        catch(err) {
            console.log(err)
        }
    }

    /**
     * Moves the layer down in the layer group by one spot, causing it to be rendered before the layer now above.
     * This is done by calling the API endpoint /api/LayerData/Rearrange/Down/:id.
     * @param id The ID of the layer to move down in the layer group.
     */
    const moveLayerDown = async (id: string) => {
        try {
            await fetch('/api/LayerData/Rearrange/Down/' + id, {
                method: 'PUT',
                headers: {
                    authorization: props.authToken,
                    "Content-Type": "application/json",
                },
            });
        }
        catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="layer-list-row" id={"Layer Group Row"}>
            <input
                type="checkbox"
                id={`section-layer-group-item-${props.item?.id ?? ""}`}
                style={{
                    marginLeft: "20px",
                    marginRight: "5px"
                }}
                // NEW IMPLEMENTATION - If a layer's ID is in the active layers list, the checkbox is checked
                checked={props.activeLayers.includes(props.item?.layerId ?? '')} 
                onChange={toggleLayerVisibility}
            />
            <label htmlFor={`section-layer-group-item-${props.item?.id ?? ""}`}>
                <FontAwesomeIcon 
                    icon={getFontawesomeIcon(props.item.iconType, props.item.isSolid)} 
                    style={{ color: props.item.iconColor }} 
                />
                {props.item.label}
                <div className="dummy-label-layer-space"></div>
            </label>

            <div className="layer-buttons-block">
                <div className="layer-buttons-list">
                    {
                        showEditorOptions && (
                            <div className="tooltip-container" data-title="Edit Layer">
                                <FontAwesomeIcon
                                    className="edit-button"
                                    color="black"
                                    icon={getFontawesomeIcon(FontAwesomeLayerIcons.PEN_TO_SQUARE)}
                                    onClick={() => {
                                        props.openWindow();
                                        props.fetchLayerDataCallback(props.item.layerId ?? '');
                                        props.editFormVisibleCallback(true);
                                    }}
                                />
                            </div>
                        )
                    }
                    {
                        showEditorOptions && (
                            <div className="tooltip-container" data-title="Move Up">
                                <FontAwesomeIcon
                                    className="decrement-order"
                                    color="black"
                                    icon={getFontawesomeIcon(FontAwesomeLayerIcons.UP_ARROW)}
                                    onClick={async() => {
                                        await moveLayerUp(props.item.id)
                                        props.afterSubmit()
                                    }}
                                />
                            </div>
                        )
                    }
                    {
                        showEditorOptions && (
                            <div className="tooltip-container" data-title="Move Down">
                                <FontAwesomeIcon
                                    className="increment-order"
                                    color="black"
                                    icon={getFontawesomeIcon(FontAwesomeLayerIcons.DOWN_ARROW)}
                                    onClick={async() => {
                                        await moveLayerDown(props.item.id)
                                        props.afterSubmit()
                                    }}
                                />
                            </div>
                        )
                    }
                    {
                        (props.item.center != null && props.item.zoom != null) && (
                            <div className="tooltip-container" data-title="Zoom to Layer">
                                <FontAwesomeIcon
                                    className="zoom-to-layer"
                                    color="blue"
                                    icon={getFontawesomeIcon(FontAwesomeLayerIcons.CROSSHAIRS)}
                                    onClick={() => {
                                        props.mapZoomCallback({
                                            center: props.item.center ?? [0, 0],
                                            zoom: props.item.zoom ?? 0,
                                            bearing: props.item.bearing ?? 0,
                                            speed: 0.2,
                                            curve: 1,
                                            duration: 2500,
                                        })
                                    }}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Layer;