function ConnectUs(){
    return (
      <div className="container">
      <div className="row">
        <div className="col1">
          <select className="form-select" size="10"  >
       
            <option value="1">Splash Plad</option>
            <option value="2">Sports</option>
            <option value="3">Fireworks</option>
            <option value="4">Parks</option>
            <option value="5">Farmers Market</option>
            <option value="6">Movie Nights in the Park</option>
          </select>
        </div>
        <div className="col">
        This Sunday evening, July 25th, Whoville is hosting the annual Whoville Symphony Pops Concert and Fireworks from 9-11 p.m. We would like to remind people of the congestion that occurs particularly around the intersections of 36th St and Harrison Blvd and 3600 Skyline Dr.  Please be attentive to the traffic cones and road signs explaining the routes.  Once the event is over, please exercise caution while driving through the area, as there will be large groups of pedestrians crossing roads and sidewalks.  Ogden Police and WSU Police will be throughout the area to ensure vehicular and pedestrian traffic will flow as smoothly as possible.  We hope you enjoy the concert and the kickoff to a great Ogden Pioneer Days week!
        </div>
        <div className="col">
          <img src="../src/components/calendar.png"></img>
        </div>
      </div>
      </div>
    );  
  }