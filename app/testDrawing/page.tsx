"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibWFwbnkiLCJhIjoiY200OW03ZGh2MGJyMzJrcTEydW4wMGh2eSJ9.eJnHIk7wriv-Hp02T7mT3g";

const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const [markerId, setMarkerId] = useState(0); // Unique ID for markers

    useEffect(() => {
        if (mapRef.current || !mapContainerRef.current) return;

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-74.5, 40],
            zoom: 12,
        });

        mapRef.current.on("load", () => {
            console.log("Map loaded successfully.");

            // Add an empty GeoJSON source for dynamic markers
            mapRef.current!.addSource("markers", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [],
                },
            });

            // Add a symbol layer for the markers
            mapRef.current!.addLayer({
                id: "marker-layer",
                type: "symbol",
                source: "markers",
                layout: {
                    "icon-image": "marker-15", // Default Mapbox marker
                    "icon-size": 10, // Adjust size
                    "icon-anchor": "bottom",
                },
            });
        });

    }, []);

    const addMarker = () => {
        if (!mapRef.current) {
            console.error("Map is not initialized.");
            return;
        }

        const center = mapRef.current.getCenter();
        console.log("Adding marker at:", center.lng, center.lat);

        // Get the existing source data
        const source = mapRef.current.getSource("markers") as mapboxgl.GeoJSONSource;
        if (!source) return;

        // Create a new GeoJSON feature
        const newMarker = {
            type: "Feature",
            properties: { id: markerId },
            geometry: {
                type: "Point",
                coordinates: [center.lng, center.lat],
            },
        };

        // Get existing features and add the new one
        const existingData = source._data as any;
        existingData.features.push(newMarker);

        // Update the source with the new data
        source.setData(existingData);

        setMarkerId(markerId + 1);
    };

    return (
        <div className="relative w-full h-screen">
            <div ref={mapContainerRef} className="w-full h-full" />
            <button
                onClick={addMarker}
                className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
                Add Marker at Center
            </button>
        </div>
    );
};

export default Map;
