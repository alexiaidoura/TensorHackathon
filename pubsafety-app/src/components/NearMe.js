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

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-78.6382, 35.7796], // Raleigh NC
        zoom: 12
    });

    let marker = new mapboxgl.Marker()
      .setLngLat([-78.6382, 35.7796]) // TODO: #2 replace hardcoded point with first point from array 
      .addTo(map);

      // This array will contain the bus stops pulled from city of raleigh data
      let myParks = []; 
    
      // main function that calls getStops, then adds the coordinates for each stop to the busStops array
      async function run() {
      let parks = await getParks();
      console.log('parks ' + parks);//this works
      parks.forEach(element => { 
        myParks.push([element.location.lng,element.location.lat]);
        console.log(myParks);
        addMarkers(myParks);
      });
      //console.log(busStops);
      
  }
  

  async function getParks(){

    const url = 'https://transloc-api-1-2.p.rapidapi.com/stops.json?agencies=12%2C16&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&callback=call'
   const response = await fetch(url, {
     "method": "GET",
     "headers": {
       "x-rapidapi-host": "transloc-api-1-2.p.rapidapi.com",
       "x-rapidapi-key": "b7171ad4d3msh01b70be2d7d502ep1ab363jsnb55cd1cacc00"
       //"x-rapidapi-key": RALEIGH_MAP_SECRET //TODO: IMPLEMENT SECRETS
     }
   });
   const json = await response.json();
   let theParks = json.data;
    //let theStops = json.data;
    console.log("parks are:" + theParks);
    return theParks;
  }
// counter here represents the index of the current bus stop
function addMarkers(myParks) {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  myParks.forEach((element) => {
    const parkMarker = new mapboxgl.Marker()
    parkMarker.setLngLat(element).addTo(map);
  })
}

run();

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { run, move, counter, marker, busStops };
}
 //}


