import { getFontawesomeIcon } from "@/app/helpers/font-awesome.helper";
import { FontAwesomeLayerIcons } from "@/app/models/font-awesome.model";
import { MapFiltersGroup } from "@/app/models/maps/map-filters.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MapFilterComponent from "./map-filter.component";
import MapFiltersGroupComponent from "./map-filters-group.component";
import { MapItem, MapZoomProps } from "@/app/models/maps/map.model";
import ZoomLabelButton from "../forms/buttons/zoom-label-button.component";
import ButtonLinkForm from "../forms/ButtonLinkForm";
import ButtonLinkButton from "../forms/buttons/button-link-button.component";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/app/models/button-link.model";
import NewMapGroupForm from "../forms/NewMapGroupForm";

export type MapFilterWrapperProps = {
  defaultMap: MapItem;
  mapGroups: MapFiltersGroup[];
  beforeOpen: () => void;
  afterClose: () => void;
  beforeMapCallback: (map: MapItem) => void;
  afterMapCallback: (map: MapItem) => void;
  zoomToWorld: () => void;
  mapZoomCallback: (zoomProps: MapZoomProps) => void;
  authToken: string;
  inPreviewMode: boolean;
};

const MapFilterWrapperComponent = (props: MapFilterWrapperProps) => {
  const [showForm, setShowForm] = useState(false);
  const [buttonLinks, setButtonLinks] = useState<ButtonLink[]>([]);
  const [groupFormOpen, setGroupFormOpen] = useState<boolean>(false);
  const [showEditorOptions, setShowEditorOptions] = useState<boolean>(false);

  useEffect(() => {
      const isAuthed: boolean = (props.authToken ?? '') != '';
      const inPreviewMode: boolean = props.inPreviewMode ?? false;

      setShowEditorOptions(isAuthed && !inPreviewMode);
  }, [props.authToken, props.inPreviewMode])

  // Fetches button links from the backend on page load
  useEffect(() => {
    const fetchButtonLinks = async () => {
      try {
        const response = await fetch("/api/ButtonLink");
        if (!response.ok) {
          throw new Error("Failed to fetch button links");
        }

        const data = await response.json();
        if (data.buttonLinks) {
          setButtonLinks(data.buttonLinks); // Initializes the state with fetched links
        }
      } catch (error) {
        console.error("Error fetching button links:", error);
      }
    };

    fetchButtonLinks();
  }, []);

  const handleAddButtonLink = async (newLink: ButtonLink) => {
    try {
      const response = await fetch("/api/ButtonLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLink),
      });

      if (!response.ok) {
        throw new Error("Failed to add button link");
      }

      const data = await response.json();

      // Updates the state with the new button link
      setButtonLinks((prev) => [...prev, data.buttonLink]);
    } catch (error) {
      console.error("Error adding button link:", error);
    }
  };

  const handleDeleteButtonLink = async (id: string) => {
    try {
      // Send DELETE request to the backend
      const response = await fetch("/api/ButtonLink", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete button link");
      }
  
      // Update the state to remove the deleted button
      setButtonLinks((prev) => prev.filter((link) => link.id !== id));
    } catch (error) {
      console.error("Error deleting button link:", error);
    }
  };
  

  return (
    <>
      <div>
        <p className="title">MAPS</p>
        <MapFilterComponent
          afterClose={props.afterClose}
          mapZoomCallback={props.mapZoomCallback}
          beforeMapCallback={props.beforeMapCallback}
          afterMapCallback={props.afterMapCallback}
          map={props.defaultMap}
          beforeOpen={props.beforeOpen}
          displayZoomButton
          displayInfoButton
          displayEditButton={false}
          fetchMapCallback={() => {}} // Do nothing
          mapEditFormCallback={() => {}} // Do nothing
          authToken={props.authToken}
          showEditorOptions={showEditorOptions}
        ></MapFilterComponent>
        <div id="maps-group">
          {props.mapGroups.map((m, idx) => (
            <MapFiltersGroupComponent
              inPreviewMode={props.inPreviewMode}
              authToken={props.authToken}
              beforeOpen={props.beforeOpen}
              afterClose={props.afterClose}
              mapZoomCallback={props.mapZoomCallback}
              key={`map-filters-group-${idx}`}
              beforeMapCallback={props.beforeMapCallback}
              afterMapCallback={props.afterMapCallback}
              group={m}
              showEditorOptions={showEditorOptions}
            ></MapFiltersGroupComponent>
          ))}
        </div>
        {!groupFormOpen && props.authToken !== "" && (
              <div
                style={{
                  paddingTop: "5px",
                  paddingLeft: "15px",
                  paddingRight: "10px",
                  textAlign: "center",
                }}
              >
                <button id="post-button" onClick={() => setGroupFormOpen(true)}>
                  <FontAwesomeIcon
                    icon={getFontawesomeIcon(
                      FontAwesomeLayerIcons.PLUS_SQUARE,
                      true
                    )}
                  ></FontAwesomeIcon>{" "}
                  New Group Folder
                </button>
              </div>
            )}
            {groupFormOpen && (
              <NewMapGroupForm
                authToken={props.authToken}
                afterSubmit={() => {
                  props.afterClose();
                  setGroupFormOpen(false);
                }}
                afterCancel={() => {
                  setGroupFormOpen(false);
                }}
              ></NewMapGroupForm>
            )}
        <center
          style={{
            marginTop: "15px",
          }}
        >
          <ZoomLabelButton
            inPreviewMode={props.inPreviewMode}
            authToken={props.authToken}
            beforeOpen={props.beforeOpen}
            afterClose={props.afterClose}
          ></ZoomLabelButton>
          <button
            onClick={() => props.zoomToWorld()}
            id="zoom-world"
          >
            <FontAwesomeIcon
              icon={getFontawesomeIcon(FontAwesomeLayerIcons.GLOBE)}
            ></FontAwesomeIcon>
            <strong> Zoom to World</strong>
          </button>
        </center>

        {/* Manage Button Links Section */}
        {
          showEditorOptions && (
            <center style={{ marginTop: "15px" }}>
              <button
                id="button-link"
                onClick={() => setShowForm((prev) => !prev)}
              >
                <FontAwesomeIcon icon={getFontawesomeIcon(FontAwesomeLayerIcons.LINK, true)}></FontAwesomeIcon>
                Add New Button Link
              </button>
            </center>
          )
        }

        {/* Conditionally Render Form */}
        {showForm && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              borderTop: "1px solid #ccc",
            }}
          >
            <ButtonLinkForm cancelCallback={() => {setShowForm(false)}} onSubmit={handleAddButtonLink} />
          </div>
        )}

        {/* Render Button Links */}
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            borderTop: "1px solid #ccc",
          }}
        >
          {buttonLinks.map((link) => (
            <ButtonLinkButton inPreviewMode={props.inPreviewMode} authToken={props.authToken} key={link.id} buttonLink={link} onDelete={handleDeleteButtonLink} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MapFilterWrapperComponent;
