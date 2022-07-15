

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
      <a className="navbar-brand" href="" title="Return to home page">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/connectus/" title="Connect with other families">Connect</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/meetUp/" title="Find events and make plans">Meet Ups</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/createaccount/" title="Need an account? Start here">Create Account</a>
          </li>   
          
          <li className="nav-item">
            <a className="nav-link" href="#/login/" title="Log in here">Login</a>
          </li>          
          <li className="nav-item">
            <a className="nav-link" href="#/about/" title="Get contact info, or contact us directly">About</a>
          </li>
           
        </ul>
      </div>
    </nav>
    </>
  );
}