function NavBar(){


    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a className="navbar-brand" href="#">Community Page</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aira-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" id = "#/login/" href="#/login/">Login</a>
                    </li>       

                    <li className="nav-item">
                        <a className="nav-link" id="#/Events/" href="#/Events/">Events</a>
                    </li>       

                    <li className="nav-item">
                        <a className="nav-link" id="#/About/" href="#/About/">About</a>
                    </li>   

                    <li className="nav-item">
                        <a className="nav-link" id="#/Connect/" href="#/Connect/">Connect</a>
                    </li>   
                </ul>
            </div>
            </nav>
                </>
                
            );
            
        }