"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoibWFwbnkiLCJhIjoiY200OW03ZGh2MGJyMzJrcTEydW4wMGh2eSJ9.eJnHIk7wriv-Hp02T7mT3g";

const Map = () => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const [markerId, setMarkerId] = useState(0);

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
            // Add initial empty GeoJSON source for markers
            map.addSource("markers", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [],
                },
            });

            // Add a symbol layer using Mapbox's built-in marker icon
            map.addLayer({
                id: "marker-layer",
                type: "symbol",
                source: "markers",
                layout: {
                    "icon-image": "marker-15",
                    "icon-size": 2.5, // Increase for visibility
                    "icon-allow-overlap": true,
                    "icon-anchor": "bottom",
                },
            });
        });

        map.on("click", (e) => {
            const lngLat = e.lngLat;
            const source = map.getSource("markers") as mapboxgl.GeoJSONSource;
            if (!source) return;

            const newFeature = {
                type: "Feature",
                properties: { id: markerId },
                geometry: {
                    type: "Point",
                    coordinates: [lngLat.lng, lngLat.lat],
                },
            };

            const data = source._data as GeoJSON.FeatureCollection;
            data.features.push(newFeature);
            source.setData(data);

            setMarkerId((prev) => prev + 1);
        });
    }, [markerId]);

    return (
        <div className="relative w-full h-screen">
            <div ref={mapContainerRef} className="w-full h-full" />
        </div>
    );
};

export default Map;
