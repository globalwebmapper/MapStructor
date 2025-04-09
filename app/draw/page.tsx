'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function DrawPage() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (mapContainer.current && !mapRef.current) {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [-74.006, 40.7128],
                zoom: 12,
            });

            const draw = new MapboxDraw({
                displayControlsDefault: false,
                controls: {
                    polygon: true,
                    trash: true,
                    point: true,
                },
            });

            map.addControl(draw);
            map.addControl(new mapboxgl.NavigationControl(), 'top-left');

            // ✅ Add marker on click
            map.on('click', (e) => {
                new mapboxgl.Marker()
                    .setLngLat(e.lngLat)
                    .addTo(map);
            });

            mapRef.current = map;
        }
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full">
            <div ref={mapContainer} className="w-full h-full" />
        </div>
    );
}
