import { SectionLayer, SectionLayerGroup, SectionLayerItem } from "@/app/models/layers/layer.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useContext, useEffect } from "react";
import { faMinusSquare, faPlusSquare, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import SectionLayerGroupComponent from "./section-layer-group.component";
import NewSectionLayerGroup from "../new-section-layer-group.component";
import { MapZoomProps } from "@/app/models/maps/map.model";
import NewLayerGroupForm from "../forms/LayerGroupForm";
import Modal from 'react-modal';
import { LayerGroup as PrismaLayerGroup } from '@prisma/client';
import Loader from "../loading/loading.component";
import { getFontawesomeIcon } from "@/app/helpers/font-awesome.helper";
import { FontAwesomeLayerIcons } from "@/app/models/font-awesome.model";
import NewLayerSectionForm from "../forms/NewLayerSectionForm";
import { IconColors } from "@/app/models/colors.model";
import {CSSTransition} from 'react-transition-group';


type SectionLayerProps = {
    layersHeader: string,
    layer: SectionLayer,
    activeLayerCallback: (activeLayers: string[]) => void,
    activeLayers: string[],
    openWindow: () => void,
    beforeOpen: () => void,
    afterClose: () => void,
    mapZoomCallback:(zoomProps: MapZoomProps) => void,
    getLayerSectionsCallback: () => void,
    removeMapLayerCallback: (id: string) => void,
    afterSubmit: () => void,
    authToken: string,
    inPreviewMode: boolean
}

const SectionLayerComponent = (props: SectionLayerProps) => {
    const [layerIsOpen, setLayerIsOpen] = useState<boolean>(false);
    const [editOpen, setEditOpen] = useState<boolean>(false);
    const [editSectionOpen, setEditSectionOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [layerGroup, setLayerGroup] = useState<PrismaLayerGroup>();
    const [layerSection, setLayerSection] = useState<PrismaLayerGroup>();
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const [showEditorOptions, setShowEditorOptions] = useState<boolean>(false);

    useEffect(() => {
        const isAuthed: boolean = (props.authToken ?? '') != '';
        const inPreviewMode: boolean = props.inPreviewMode ?? false;

        setShowEditorOptions(isAuthed && !inPreviewMode);
    }, [props.authToken, props.inPreviewMode])

    const closeEdit = () => {
        props.afterClose();
        setEditOpen(false);
        setLayerGroup(undefined);
    }

    //handle functions for animation
    const handleEnter = () => {
        if (nodeRef.current) {
        nodeRef.current.style.height = "0px";
        }
    };

    const handleEntering = () => {
        if (nodeRef.current) {
        nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
        }
    };

    const handleEntered = () => {
        if (nodeRef.current) {
        nodeRef.current.style.height = "auto";
        }
    };

    const handleExit = () => {
        if (nodeRef.current) {
        nodeRef.current.style.height = `${nodeRef.current.scrollHeight}px`;
        nodeRef.current.style.overflow = "hidden";
        }
    };

    const handleExiting = () => {
        if (nodeRef.current) {
        nodeRef.current.style.height = "0px";
        }
    };

    const handleExited = () => {
        if (nodeRef.current) {
        nodeRef.current.style.height = "0px";
        }
    };

    const fetchLayerSection = async (id: string) => {
        setIsLoading(true);
        try {
            await fetch('/api/LayerSection/' + id) 
            .then((response) => {
            response.json()?.then(parsed => {
                setLayerSection(parsed.layerSection);
            })
        });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
          setIsLoading(false);
        }
    };

    const fetchLayerGroup = async (id: string) => {
        setIsLoading(true);
        try {
            await fetch('/api/LayerGroup/' + id) 
            .then((response) => {
            response.json()?.then(parsed => {
                console.log('ERERERER', parsed);
                setLayerGroup(parsed.layerGroup);
            })
        });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setIsLoading(false);
        }
    };

    const UpLayerSection = async (id: string) => {
        setIsLoading(true);
        try {
            await fetch('/api/LayerSection/Rearrange/Up/' + id, {
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
        finally {
            setIsLoading(false);
        }
    }

    const DownLayerSection = async (id: string) => {
        setIsLoading(true);
        try {
            await fetch('/api/LayerSection/Rearrange/Down/' + id, {
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
        finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <center style={{paddingTop: "20px"}}>
                {editSectionOpen ? (
                    <>
                        {isLoading ? (
                            <Loader
                            center={false}/>
                        ) : (
                            <NewLayerSectionForm
                                authToken={props.authToken}
                                afterSubmit={() => {
                                    setEditSectionOpen(false);
                                    setLayerSection(undefined);
                                    props.getLayerSectionsCallback();
                                }}
                                layerSection={layerSection}
                                afterCancel={() => {}}>
                            </NewLayerSectionForm>
                        )}
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon onClick={() => setLayerIsOpen(!layerIsOpen)} color={IconColors.DARK_GREY} icon={layerIsOpen ? getFontawesomeIcon(FontAwesomeLayerIcons.MINUS_SQUARE, true) : getFontawesomeIcon(FontAwesomeLayerIcons.PLUS_SQUARE, true)}
                        id="folder-plus-minus-icon" />
                        <b>
                        {props.layersHeader ?? "" /* Possibly need a different "DisplayName" prop to be used for this if not formatted correctly */}
                        </b>
                        <div className="layer-buttons-block">
                            <div className="layer-buttons-list">
                                {
                                    showEditorOptions && (
                                        <div className="tooltip-container" data-title="Edit Folder">
                                            <FontAwesomeIcon
                                                className="edit-button"
                                                color="black"
                                                icon={getFontawesomeIcon(FontAwesomeLayerIcons.PEN_TO_SQUARE)}
                                                onClick={() => {
                                                    setEditSectionOpen(true);
                                                    fetchLayerSection(props.layer.id);
                                                }}
                                                style={{
                                                    paddingLeft: "10px"
                                                }}/>
                                        </div>
                                    )
                                }
                                {
                                    showEditorOptions && (
                                        <div className="tooltip-container" data-title="Move Up">
                                            <FontAwesomeIcon 
                                                className="decrement-order"
                                                color="black"
                                                style={{
                                                    paddingLeft: "6px"
                                                }}
                                                icon={getFontawesomeIcon(FontAwesomeLayerIcons.UP_ARROW)}
                                                onClick={async() => {
                                                    await UpLayerSection(props.layer.id)
                                                    // fetchLayerSection(props.layer.id)
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
                                            style={{
                                                paddingLeft: "6px"
                                            }}
                                            icon={getFontawesomeIcon(FontAwesomeLayerIcons.DOWN_ARROW)}
                                            onClick={async() => {
                                                await DownLayerSection(props.layer.id)
                                                props.afterSubmit()
                                            }}
                                        />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </>
                )}
            </center>
            <CSSTransition
                in={layerIsOpen}
                timeout={500}
                classNames="layersection"
                unmountOnExit
                nodeRef={nodeRef}
                onEnter={handleEnter}
                onEntering={handleEntering}
                onEntered={handleEntered}
                onExit={handleExit}
                onExiting={handleExiting}
                onExited={handleExited}>
                <div ref={nodeRef} className="layersection">
                    {
                        props.layer.groups.map((grp, idx) => (
                            <SectionLayerGroupComponent
                                inPreviewMode={props.inPreviewMode}
                                authToken={props.authToken}
                                key={`section-layer-component-${idx}`}
                                activeLayers={props.activeLayers}
                                activeLayerCallback={props.activeLayerCallback}
                                layersHeader={props.layersHeader}
                                group={grp}
                                openWindow={props.openWindow}
                                beforeOpen={props.beforeOpen}
                                afterClose={props.afterClose}
                                sectionName={props.layer.id}
                                mapZoomCallback={props.mapZoomCallback}
                                fetchLayerGroupCallback={fetchLayerGroup}
                                editFormVisibleCallback={setEditOpen}
                                removeMapLayerCallback={props.removeMapLayerCallback}
                                afterSubmit={props.afterSubmit}/>
                        ))
                    }
                    <NewSectionLayerGroup
                        inPreviewMode={props.inPreviewMode}
                        authToken={props.authToken}
                        beforeOpen={props.beforeOpen}
                        afterClose={props.afterClose}
                        sectionLayerId={props.layer.id}
                    ></NewSectionLayerGroup>
                    {
                        editOpen && (
                            <Modal
                                style={{
                                    overlay: {
                                        zIndex: "1000",
                                    },
                                    content: {
                                        width: '30%',
                                        right: '5px'
                                    }
                                }}
                                isOpen={editOpen}
                                onRequestClose={() => {closeEdit();}}
                                contentLabel='Edit Layer Group'
                            >
                                {isLoading ? (
                                    <Loader
                                    center={true}/>
                                    ) : (
                                    <NewLayerGroupForm authToken={props.authToken} sectionLayerId={props.layer.id} layerGroup={layerGroup} afterSubmit={closeEdit}></NewLayerGroupForm>
                                    )
                                }
                            </Modal>
                        )
                    }
                </div>
            </CSSTransition>
        </>
    )
}

export default SectionLayerComponent;