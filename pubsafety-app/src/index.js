function Spa() {
  return (
    <div>
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'katelyn',email:'katelyn@example.com',password:'secret',lastlocation:'123 Main St'}]}}>              
        <Route path="/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/about" component={About} />

        <Route path="/connectUs" component={ConnectUs} />
        <Route path="/meetUp" component={MeetUp} />

        <Route path="/login" component={Login} />
        
   
      </UserContext.Provider>      
      <MyFooter />
    </HashRouter>
    </div>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);