"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
    "pk.eyJ1IjoibWFwbnkiLCJhIjoiY200OW03ZGh2MGJyMzJrcTEydW4wMGh2eSJ9.eJnHIk7wriv-Hp02T7mT3g";

const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const isAddingMarkersRef = useRef(false);

    const [isAddingMarkers, setIsAddingMarkers] = useState(false);

    // Keep ref in sync with state
    useEffect(() => {
        isAddingMarkersRef.current = isAddingMarkers;
    }, [isAddingMarkers]);

    useEffect(() => {
        if (mapRef.current || !mapContainerRef.current) return;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-74.5, 40],
            zoom: 12,
        });

        mapRef.current = map;

        map.on("load", () => {
            console.log("Map loaded.");

            // Add click listener ONCE, then check ref inside it
            map.on("click", (e) => {
                if (!isAddingMarkersRef.current) return;

                console.log("Adding marker at", e.lngLat);

                // Create a GeoJSON feature to represent the marker
                const markerFeature = {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "Point",
                        coordinates: [e.lngLat.lng, e.lngLat.lat],
                    },
                };

                // Add the feature to a GeoJSON source
                const source = map.getSource("markers") as mapboxgl.GeoJSONSource;
                if (source) {
                    const currentData = source._data as mapboxgl.GeoJSONFeatureCollection;
                    currentData.features.push(markerFeature);
                    source.setData(currentData);
                }
            });

            // Add GeoJSON source for the markers
            map.addSource("markers", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [],
                },
            });

            // Add a symbol layer for the markers with larger size
            map.addLayer({
                id: "marker-layer",
                type: "symbol",
                source: "markers",
                layout: {
                    "icon-image": "marker-15", // Default Mapbox marker
                    "icon-size": 1.5, // Make the marker 1.5 times larger
                    "icon-anchor": "center",
                },
            });
        });
    }, []);

    return (
        <div className="relative w-full h-screen">
            <div ref={mapContainerRef} className="w-full h-full" />

            <button
                onClick={() => setIsAddingMarkers((prev) => !prev)}
                className={`absolute top-4 left-4 px-4 py-2 rounded-lg shadow-lg text-white font-semibold transition-all z-10 ${
                    isAddingMarkers
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-600 hover:bg-gray-700"
                }`}
            >
                {isAddingMarkers ? "Marker Mode: ON" : "Enable Marker Mode"}
            </button>
        </div>
    );
};

export default Map;
