function About(){
  return (
    <div class = "about">
    <form>
    <div class = "info"> 
    Whosville City Building<br></br>
    1234 S 2735 W <br></br>
    Whosville, Ut, 12345 <br></br>

    Hours: <br></br>
    Monday - Friday 8:00-5:00 <br></br>
    <br/>

      Contact Information <br></br>
    Email Address: whosville@gmail.com <br></br>
    Phone: 123-456-7890 <br></br>
    <br/>
    
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">
        Please submit any questions, comments or concerns about community events below. <br></br>
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