//import {Home} from "./Home.js";
//import React from 'react';
//import NearMe from "./NearMe.js";

//TODO: onClick={} -- add location to json file or just state? print history?
// add a slider that you can use when you check in to say how busy the event is?

function Home(){
  // const [status, setStatus] = React.useState('');
  // //const [show, setShow] = React.useState(true);
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const ctx = React.useContext(UserContext);    
  // //this week's events: pull in event data from json file or db
  // //check in: store current location and display last five?
  // //events near me: embed map with markers
  const mapwidth = 200;

  const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch('../src/components/eventdata.json');
            //console.log('response ' + response);
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    //console.log('loaded:', loaded, 'data:', data);

    


    return (
      <>
      <div className= "Home">
        
      <h1 className="display-2 text-center">Welcome to Whosville!</h1>
        

      <div className="row">
        <div className="col">
        <CardWide 
        cardimage="../src/cotc-kids.jpeg"
        header="This week"
        body={
          <>
            {loaded && data.events.map((event,i) => (
                    <MyEvent data={event} key={i}/>           
                ))};     
        </>   
        }
      />
        </div>
      
      
      
      
        <div className="col">
        <Card 
          header="Check in!"
          body= {
          <>
            <img src="../src/4641_w.jpeg" width="200"></img><br></br>
            <button type="submit" className="btn btn-light">Check in!</button>

          </>}
        />
        </div>
        <div className="col">
        <Card 
          header="Events near me"
          body= {
          <>

          <a href='../src/components/nearme.html'><img src='../src/components/eventsnearme.png' style={{mapwidth}}></img></a>
          </>}
        />
        </div>
        </div>
        </div>

      </>
    );  
  }