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
        //HELP -- I WANT TO PULL OUT LAT AND LON. EACH ELEMENT LOOKS LIKE THIS:
        //{"NAME":"Windemere Beaver Dam","LAT":35.81211,"LON":-78.67235} 
        //console.log('thiselement ' + parks[key].attributes.LON,parks[key].attributes.LAT);
        myParks.push([element.attributes.LON, element.attributes.LAT]);
        console.log(myParks);
      });
      //console.log(busStops);
      
  }
  

  async function getParks(){

    const url = 'https://services.arcgis.com/v400IkDOw1ad7Yad/arcgis/rest/services/Parks/FeatureServer/0/query?where=1%3D1&outFields=NAME,LAT,LON&outSR=4326&f=json'
    const response = await fetch(url);
    const json = await response.json();
    //console.log("json is:" + JSON.stringify(json));
    //let theParks = JSON.stringify(json);
    let theParks = JSON.stringify(json); //HELP: NOT CONVINCED THIS SHOULD BE STRINGIFY -- I WANT TO STORE THE OBJECTS SO I CAN RETRIEVE ATTRIBUTES LON AND LAT LATER

    //let theStops = json.data;
    console.log("parks are:" + theParks);
    return theParks;
  }
// counter here represents the index of the current bus stop
let counter = 0;
function addMarkers() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= myParks.length) return;
    console.log('counter ' + counter);
    let marker2 = new mapboxgl.Marker()
      .setLngLat(myParks[counter].LAT, myParks[counter].LON) // HELP:  
      .addTo(map);
    //marker.setLngLat(myParks[counter]);
    counter++;
    addMarkers();
  }, 1000);
}

run();


 //}


