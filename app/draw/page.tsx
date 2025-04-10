'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function DrawPage() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const drawRef = useRef<MapboxDraw | null>(null);
    const [satelliteView, setSatelliteView] = useState(false);
    const [markers, setMarkers] = useState<mapboxgl.Marker[]>([]);

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
            drawRef.current = draw;

            map.addControl(new mapboxgl.NavigationControl(), 'top-left');

            // Load saved drawings from localStorage
            map.on('load', () => {
                const saved = localStorage.getItem('saved-drawings');
                if (saved) {
                    try {
                        const geojson = JSON.parse(saved);
                        draw.set(geojson);
                    } catch (err) {
                        console.error('Invalid saved GeoJSON');
                    }
                }
            });

            // Add marker on click
            map.on('click', (e) => {
                const marker = new mapboxgl.Marker()
                    .setLngLat(e.lngLat)
                    .addTo(map);
                setMarkers((prev) => [...prev, marker]);
            });

            mapRef.current = map;
        }
    }, []);

    const clearMarkers = () => {
        markers.forEach(marker => marker.remove());
        setMarkers([]);
    };

    const exportGeoJSON = () => {
        const data = drawRef.current?.getAll();
        alert(JSON.stringify(data, null, 2));
    };

    const saveDrawing = () => {
        const data = drawRef.current?.getAll();
        localStorage.setItem('saved-drawings', JSON.stringify(data));
        alert('Drawing saved to localStorage!');
    };

    const loadGeoJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            try {
                const geojson = JSON.parse(reader.result as string);
                drawRef.current?.set(geojson);
                alert('Custom GeoJSON loaded!');
            } catch (err) {
                alert('Invalid GeoJSON file.');
            }
        };
        reader.readAsText(file);
    };

    const toggleSatelliteView = () => {
        const map = mapRef.current;
        if (!map) return;

        const newStyle = satelliteView
            ? 'mapbox://styles/mapbox/streets-v11'
            : 'mapbox://styles/mapbox/satellite-streets-v11';

        map.setStyle(newStyle);
        setSatelliteView(!satelliteView);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full">
            <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded shadow space-y-2">
                <button onClick={clearMarkers} className="block w-full bg-red-500 text-white px-4 py-2 rounded">Clear Markers</button>
                <button onClick={exportGeoJSON} className="block w-full bg-green-500 text-white px-4 py-2 rounded">Export GeoJSON</button>
                <button onClick={saveDrawing} className="block w-full bg-purple-500 text-white px-4 py-2 rounded">Save Drawing</button>
                <button onClick={toggleSatelliteView} className="block w-full bg-blue-500 text-white px-4 py-2 rounded">
                    {satelliteView ? 'Default View' : 'Satellite View'}
                </button>
                <input
                    type="file"
                    accept=".geojson,application/geo+json"
                    onChange={loadGeoJSON}
                    className="block w-full mt-2 text-sm"
                />
            </div>

            <div ref={mapContainer} className="w-full h-full" />
        </div>
    );
}
