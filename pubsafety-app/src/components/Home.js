//import {Home} from "./Home.js";
//import React from 'react';
//import NearMe from "./NearMe.js";

//TODO: onClick={} -- add location to json file or just state? print history?
// add a slider that you can use when you check in to say how busy the event is?

function Home(){
  const [status, setStatus] = React.useState('');
  //const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);    

  const mapwidth = 200;
    return (
      <>
      <div className="home">
      <div className="row">
        <div className="col">
          <h1>Welcome to Whoville</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
        <CardWide 
        bgcolor="gray"
        txtcolor="black"
        header="This week"
        title="Events"
        text="pull in from json file or db"
        body={
          <>
          <table border={2}>
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
              Event
            </td>
            <td>
              Date
            </td>
            <td>
              Location
            </td>
            </tr>
            <tr>
            <td>
              Event
            </td>
            <td>
              Date
            </td>
            <td>
              Location
            </td>
            </tr>
          </table>
          </>
        }
      />
        </div>
      </div>
      
      
      <div className="row">
        <div className="col">
        <Card 
          bgcolor="gray"
          txtcolor="black"
          header="Check in"
          text="Click here to let your friends know you are here!"
          body= {
          <>
          <button type="submit" className="btn btn-light">Check in!</button>

          </>}
        /> 
        </div>
        <div className="col">
        <Card 
          bgcolor="gray"
          txtcolor="black"
          header="Events near me"
          text="Still need to figure out how to embed the map in component vs web page"
          body= {
          <>
          <a href='../src/components/nearme.html'><img src='../src/components/nearmemap.png' width={mapwidth}></img></a>
          </>}
        />
        </div>
        </div>
        <div className="row">
        <div className="col">
          
        </div>
      </div>
      </div>
      </>
    );  
  }