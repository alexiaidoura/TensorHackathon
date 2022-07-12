function About(){
    return (
      <div class = "about">
      <form>
      <div class = "info"> 
        Contact Information <br></br>
      Email Address: whoville@gmail.com <br></br>
      Phone: 123-456-7890 <br></br>

      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address: </label>
        <input type="email" class="form-control" id="exampleFormControlInput1"/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Comments:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
   
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>  
    </div>
    );
  }