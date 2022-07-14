function About(){
  return (
    <div className = "about">
    <form>
    <div className = "info"> 
    <h1 className="display-4">Whoville City Hall</h1>
    <br></br>
    <h5>1234 S 2735 W <br></br>
    Whoville, Ut, 12345 <br></br></h5>
    

    <ln></ln><b>Hours:</b> <br></br>
    Monday - Friday 8:00-5:00 <br></br>
    <br/>

      <b>Contact Information</b> <br></br>
    <h5>Email Address: whoville@gmail.com <br></br>
    Phone: 123-456-7890</h5> <br></br>
    
    
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">
        <h5>Please submit any questions, comments or concerns about community events below.</h5> 
        <br></br>
        <br></br>
        Email address: 
        </label>
      <input type="email" className="form-control" id="exampleFormControlInput1"/>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Comments:</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
 
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>  
  </div>
  );
}