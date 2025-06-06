"use client";
import mapboxgl, { Map } from 'mapbox-gl'; 
import { RefObject, useEffect, useRef, useState } from "react";
import '@/app/compare.css';

mapboxgl.accessToken = "pk.eyJ1IjoibWFwbnkiLCJhIjoiY200OW03ZGh2MGJyMzJrcTEydW4wMGh2eSJ9.eJnHIk7wriv-Hp02T7mT3g";

interface MapboxCompareWrapperProps {
  comparisonContainerRef: RefObject<HTMLDivElement>;
  beforeMapContainerRef: RefObject<HTMLDivElement>;
  afterMapContainerRef: RefObject<HTMLDivElement>;
  beforeMapRef: RefObject<Map | null>,
  afterMapRef: RefObject<Map | null>,
}

export default function MapboxCompareWrapper(props: MapboxCompareWrapperProps) {
  const footerHeight = 74;

  // Zoom controls for both before and after maps
  const handleZoomIn = () => {
    props.beforeMapRef.current?.zoomIn();
    props.afterMapRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    props.beforeMapRef.current?.zoomOut();
    props.afterMapRef.current?.zoomOut();
  };

  const handleResetNorth = () => {
    props.beforeMapRef.current?.resetNorth();
    props.afterMapRef.current?.resetNorth();
  };

  return (
    <div
      id="comparison-container"
      ref={props.comparisonContainerRef}
    >
      {/* Before and After Maps */}
      <div id="before" ref={props.beforeMapContainerRef} className="map-style"></div>
      <div id="after" ref={props.afterMapContainerRef} className="map-style"></div>
    </div>
  );
}
