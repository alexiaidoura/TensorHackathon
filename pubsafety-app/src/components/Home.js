function Home(){
    return (
      <>

      <div className="row">
        <div className="col">
          <h1>Welcome to Whoville</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
        <ThisWeek/>
        </div>
      </div>
      
      
      <div className="row">
        <div className="col">
              <CheckIn/>
          </div>
        <div className="col">
            <NearMe/>
        </div>
      </div>
      </>

    );  
  }