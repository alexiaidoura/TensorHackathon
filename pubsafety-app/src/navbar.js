

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
      <a className="navbar-brand" href="#" title="Return to home page">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/about/" title="ADD ABOUT TOOLTIP HERE">About</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#/connectus/" title="ADD CONNECT TOOLTIP HERE">Connect</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/events/" title="ADD EVENTS TOOLTIP HERE">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/createaccount/" title="ADD CREATEACCT TOOLTIP HERE">Create Account</a>
          </li>   
          
          <li className="nav-item">
            <a className="nav-link" href="#/login/" title="ADD LOGIN TOOLTIP HERE">Login</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}