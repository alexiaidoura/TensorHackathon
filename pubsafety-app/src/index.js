
// import React from 'react';
// import ReactDOM from 'react-dom';
// //import 'mapbox-gl/dist/mapbox-gl.css';
//import './index.css';
// //import Spa from './index.js';

function Spa() {
  
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'katelyn',email:'katelyn@example.com',password:'secret',lastlocation:'123 Main St'}]}}>              
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/about" component={About} />

        <Route path="/connectUs" component={ConnectUs} />
        <Route path="/events" component={Events} />

        <Route path="/login" component={Login} />
      </UserContext.Provider> 
      <MyFooter/>     
    </HashRouter>
  );
}


ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);