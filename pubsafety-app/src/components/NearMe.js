//is there a way to repurpose a map overlay so we can reuse for where are my friends (based on their check ins)
//import Map, { GeolocateControl } from "react-map-gl";
//import "mapbox-gl/dist/mapbox-gl.css";
//import MyMap from './MyMap';
// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import './NearMe.css';

// mapboxgl.accessToken = 'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';

function NearMe(){
  <div id="map"></div>
 
    mapboxgl.accessToken = 'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-71.091542,42.358862],
        zoom: 12
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([-71.091542,42.358862])
        .addTo(map);
  }