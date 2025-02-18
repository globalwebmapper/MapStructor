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
    updateActiveLayers: (activeLayers: string[]) => void,
    activeLayers: string[],
    openWindow: () => void,
    editFormVisibleCallback: (isOpen: boolean) => void,
    mapZoomCallback:(zoomProps: MapZoomProps) => void,
    fetchLayerDataCallback: (id: string) => void,
    afterSubmit: () => void,
    layerGroupIsVisible: boolean, // True if layer group is visible, false otherwise
    authToken: string,
    inPreviewMode: boolean
}

/**
 * Layer is a functional component that renders a single graphical
 * layer within a layer group. It provides features such as toggling the visibility of 
 * the layer, changing the layer's appearance, and rearranging the layer's order within its layer group.
 *
 * Props:
 * - item: An object of type SectionLayerItem representing the layer data.
 * - activeLayerCallback: A function to update the list of active layers.
 * - activeLayers: An array of currently active layer IDs.
 * - openWindow: A function to open the edit form modal.
 * - editFormVisibleCallback: A function to update the visibility of the edit form.
 * - mapZoomCallback: A function to trigger zooming to the layer’s location.
 * - fetchLayerDataCallback: A function to fetch data for the specified layer.
 * - afterSubmit: A function to be called after submitting changes.
 * - upperCheckBox: A boolean indicating the state of an upper checkbox.
 * - authToken: A string representing the authentication token.
 * - inPreviewMode: A boolean indicating if the component is in preview mode.
 */
const Layer = (props: LayerProps) => {
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
     * Handles the layer toggle event by adding or removing the layer from the active layer list.
     * It also toggles the checkbox state.
     */
    const toggleLayerVisibility = () => {
        if (props.item.layerId) {
            if (props.activeLayers.includes(props.item.layerId)) {
                props.updateActiveLayers(props.activeLayers.filter((layerId) => layerId !== props.item.layerId));
            }
            else {
                props.updateActiveLayers([...props.activeLayers, props.item.layerId]);
            }
        }
    }

    /**
     * Ensures that a layer is added to the active layers list by default if it is marked
     * as enabled by default.
     */
    const activateDefaultLayer = () => {
        if (props.item.layerId && props.item.enableByDefault)
        {
            props.updateActiveLayers([...props.activeLayers, props.item.layerId]);
        }
    }

    useEffect(() => {
        activateDefaultLayer();
    }, []);

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