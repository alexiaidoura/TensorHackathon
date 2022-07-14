//is there a way to repurpose a map overlay so we can reuse for where are my friends (based on their check ins)
//import Map, { GeolocateControl } from "react-map-gl";
//import "mapbox-gl/dist/mapbox-gl.css";
//import MyMap from './MyMap';
// import React, { useRef, useEffect, useState } from 'react';
 //import mapboxgl from 'mapbox-gl';
 //import './NearMe.css';

// mapboxgl.accessToken = 'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';

//function NearMe(){

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGlhcCIsImEiOiJjbDBwZGlxNm8xZHBpM2R0a2g3bXh2bmg2In0.Vwg8n-yrmyv8ZmV6WqEuWQ';

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-78.6382, 35.7796], // Raleigh NC
        zoom: 12
    });

    let marker = new mapboxgl.Marker()
      .setLngLat([-78.6382, 35.7796]) // TODO: #2 replace hardcoded point with first point from array 
      .addTo(map);

      // This array will contain the bus stops pulled from city of raleigh data
      let busStops = []; 
    
      // main function that calls getStops, then adds the coordinates for each stop to the busStops array
      async function run() {
      let stops = await getStops();
      console.log('stops ' + stops);//this works
      stops.forEach(element => {
        console.log(element);
        busStops.push([element.properties]);
        
      });
      //console.log(busStops);
      //FOR EACH BUS STOP, ADD A MARKER
      // let marker2 = new mapboxgl.Marker()
      // .setLngLat([element, 35.7796]) // TODO: #2 replace hardcoded point with first point from array 
      // .addTo(map);
  }
  

  async function getStops(){

    const url = 'https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/Parks/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson'
    const response = await fetch(url);
    const json = await response.json();
    //console.log("json is:" + json);
    let theStops = JSON.stringify(json);

    //let theStops = json.data;
    //console.log("parks are:" + theStops);
    return theStops;
  }
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}

run();


// }


