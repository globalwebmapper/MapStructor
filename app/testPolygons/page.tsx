"use client";

import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwbnkiLCJhIjoiY200OW03ZGh2MGJyMzJrcTEydW4wMGh2eSJ9.eJnHIk7wriv-Hp02T7mT3g";

const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (mapRef.current || !mapContainerRef.current) return;
        
        // Initialize mapbox map
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 12,
        });

        // Create draw instance ONCE
        drawRef.current = new MapboxDraw({
            displayControlsDefault: false,
            controls: {
                point: true,
                line_string: true,
                polygon: true,
                trash: true,
            },
        });
    }, []);

    useEffect(() => {
        const map = mapRef.current;
        const draw = drawRef.current;
        if (!map || !draw) return;

        if (editMode) { // if edit mode is enabled, add the draw control, otherwise remove it
            if (!map.hasControl(draw)) {
                map.addControl(draw, "top-right");

                // Check if there are any features saved in sessionStorage
                const savedFeatures = sessionStorage.getItem("drawFeatures");
                if (savedFeatures) {
                    const features = JSON.parse(savedFeatures);
                    draw.set(features);
                }
            }
        } else {
            if (map.hasControl(draw)) {
                // Save the current features to session storage when exiting edit mode
                const features = draw.getAll();
                if (features && features.features.length > 0) {
                    // Only save if there are features
                    sessionStorage.setItem("drawFeatures", JSON.stringify(features));
                }
                // Remove the draw control AFTER saving
                map.removeControl(draw);
            }
        }
    }, [editMode]);

    return (
        <div>
            <div ref={mapContainerRef} style={{ height: "100vh", width: "100vw" }} />
            <button onClick={() => setEditMode(prev => !prev)} 
                style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "1rem",
                    left: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    zIndex: 1, // Make sure the button is on top of the map
                }}
            >
                {editMode ? "Exit Edit Mode" : "Enter Edit Mode"}
            </button>
        </div>
    );
};

export default Map;
