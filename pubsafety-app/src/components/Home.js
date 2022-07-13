//import {Home} from "./Home.js";
//import React from 'react';
//import NearMe from "./NearMe.js";

//TODO: onClick={} -- add location to json file or just state? print history?

function Home(){
  const [status, setStatus] = React.useState('');
  //const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);    
  //pull in event data from json file or db
  const mapwidth = 200;
    return (
      <>
      <div className= "Home">
        <div className="row">
        <div className="col">
          <h1>Welcome to Whoville</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
        <CardWide 
        cardimage="../src/cotc-kids.jpeg"
        bgcolor="gray"
        txtcolor="black"
        header="This week"
        title=""
        text=""
        body={
          <>
          <table border={2} align="center">
            <tr>
            <th>
              Event
            </th>
            <th>
              Date
            </th>
            <th>
              Location
            </th>
            </tr>
            <tr>
            <td>
              Science Club!
            </td>
            <td>
              Friday 3pm
            </td>
            <td>
              Children's Museum
            </td>
            </tr>
            <tr>
            <td>
              Water balloon tag!
            </td>
            <td>
              Saturday 10am
            </td>
            <td>
              Sprayground
            </td>
            </tr>
          </table>
          </>
        }
      />
        </div>
      </div>
      
      
      <div className="row">
        <div className="col-sm-6">
        <Card 
          cardimage="../src/4641_w.jpeg"
          header="Check in"
          text="Click here to let your friends know you are here!"
          body= {
          <>
          <button type="submit" className="btn btn-light">Check in!</button>

          </>}
        /> 
        </div>
        <div className="col-sm-6">
        <Card 
          header="Events near me"
          text="Still need to figure out how to embed the map in component vs web page"
          body= {
          <>
          <a href='../src/components/nearme.html'><img src='../src/components/nearmemap.png' width={mapwidth}></img></a>
          </>}
        />
        </div>
        </div>
        </div>
      
      </>
    );  
  }