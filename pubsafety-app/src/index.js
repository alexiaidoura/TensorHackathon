
function Spa() {
  
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'katelyn',email:'katelyn@example.com',password:'secret'}]}}>              
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />

        <Route path="/connectUs" component={ConnectUs} />
        <Route path="/events" component={Events} />

        <Route path="/login" component={Login} />
      </UserContext.Provider>      
    </HashRouter>
  );
}


ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);