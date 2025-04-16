import { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeLayerIcons } from "@/app/models/font-awesome.model";
import { getFontawesomeIcon } from "@/app/helpers/font-awesome.helper";
import NewStandaloneLayerForm from "./forms/LayerForm";
import { SectionLayerItem } from "@/app/models/layers/layer.model";
import mapboxgl from "mapbox-gl";
import { useMap } from "@/app/mappingNY/components/context/MapContext.tsx";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

type LayerFormButtonProps = {
    sectionLayerId: string;
    beforeOpen: () => void;
    afterClose: () => void;
    authToken: string;
    inPreviewMode: boolean;
};

const NewStandaloneLayer = (props: LayerFormButtonProps) => {
    const [showEditorOptions, setShowEditorOptions] = useState<boolean>(false);
    const [showChoiceModal, setShowChoiceModal] = useState<boolean>(false);
    const [showFormModal, setShowFormModal] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const drawRef = useRef<MapboxDraw | null>(null);
    const { beforeMap } = useMap();

    useEffect(() => {
        const isAuthed = props.authToken !== "";
        const inPreviewMode = props.inPreviewMode ?? false;
        setShowEditorOptions(isAuthed && !inPreviewMode);
    }, [props.authToken, props.inPreviewMode]);

    useEffect(() => {
        const map = beforeMap.current;
        if (!map) return;

        if (!drawRef.current) {
            drawRef.current = new MapboxDraw({
                displayControlsDefault: false,
                controls: {
                    point: true,
                    line_string: true,
                    polygon: true,
                    trash: true
                }
            });
        }

        if (editMode) {
            if (!map.hasControl(drawRef.current)) {
                map.addControl(drawRef.current, "top-right");

                const savedFeatures = sessionStorage.getItem("drawFeatures");
                if (savedFeatures) {
                    const features = JSON.parse(savedFeatures);
                    drawRef.current.set(features);
                }
            }
        } else {
            if (map.hasControl(drawRef.current)) {
                const features = drawRef.current.getAll();
                if (features.features.length > 0) {
                    sessionStorage.setItem("drawFeatures", JSON.stringify(features));
                }
                map.removeControl(drawRef.current);
            }
        }
    }, [editMode, beforeMap]);


    const openChoiceModal = () => {
        props.beforeOpen();
        setShowChoiceModal(true);
    };

    const closeAllModals = () => {
        setShowChoiceModal(false);
        setShowFormModal(false);
        setEditMode(false);
        props.afterClose();
    };

    const handleImportLayer = () => {
        setShowChoiceModal(false);
        setShowFormModal(true);
    };

    const handleDrawLayer = () => {
        setShowChoiceModal(false);
        setEditMode(true);
    };


    Modal.setAppElement('#app-body-main');

    return (
        <>
            {showEditorOptions && (
                <div style={{ paddingTop: '5px', paddingLeft: '15px', paddingRight: '10px', textAlign: 'center' }}>
                    <button id="post-button" onClick={openChoiceModal}>
                        <FontAwesomeIcon icon={getFontawesomeIcon(FontAwesomeLayerIcons.PLUS_SQUARE, true)} /> New Standalone Layer
                    </button>
                </div>
            )}

            {/* Choice Modal */}
            <Modal
                isOpen={showChoiceModal}
                onRequestClose={closeAllModals}
                contentLabel="New Standalone Layer Options"
                style={{
                    overlay: {
                        zIndex: "1000",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    content: {
                        position: "static",
                        inset: "unset",
                        width: "300px",
                        padding: "20px",
                        borderRadius: "12px",
                        background: "#fff",
                        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                        textAlign: "center"
                    }
                }}
            >
                <h3 style={{ marginBottom: "20px" }}>Select Layer Type</h3>
                <button
                    onClick={handleImportLayer}
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                >
                    Import Layer
                </button>
                <button
                    onClick={handleDrawLayer}
                    style={buttonStyle}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                >
                    Draw Layer
                </button>
            </Modal>

            {/* Form Modal */}
            <Modal
                isOpen={showFormModal}
                onRequestClose={closeAllModals}
                contentLabel="New Standalone Layer"
                style={{
                    overlay: { zIndex: "1000" },
                    content: {
                        width: '30%',
                        right: '5px'
                    }
                }}
            >
                <NewStandaloneLayerForm
                    authToken={props.authToken}
                    standalone={true}
                    groupName={props.sectionLayerId}
                    sectionName={props.sectionLayerId}
                    afterSubmit={closeAllModals}
                    topLayerClass={props.sectionLayerId}
                />
            </Modal>
        </>
    );
};

const buttonStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ccc",
    cursor: "pointer",
    transition: "background-color 0.2s ease"
};

export default NewStandaloneLayer;
