const { response } = require("express");
const list = [
  { name:"Library Reading", date:"2022-07-28", time:"11:30:00.000", place: "City Hall" }
]
console.log(list);
document.getElementById(list);

function MeetUp(){
  const [items, setItems] = React.useState(list);

 
  fetch('http://localhost:1337/api/events').then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
    console.log("data length: ", data.data.length)
    if (data.data.length > 0) {
      let extractedData = [];
      console.log("data 0 element: ", data.data[0].attributes);
      for (let i=0; i<data.data.length; i++) {
        extractedData.push(data.data[i].attributes);
      };

      console.log(extractedData);
      let apiItems = extractedData.map((item) => {
        let { name, date, time, address } = item;
        return { name, date, time, address };
      });
        console.log(' what the newItems are:' , apiItems)
        setItems([...items, ...apiItems])
    }
      
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });

    

  const refreshEvents = (url) => {
    fetch(url);
    MeetUp();
    return (
      item
    )
    
  };

    return (
      
    <>  
    <h1>Upcoming Events!</h1>
    
    <button className="bg-default" onClick={() => refreshEvents()}>
              Get Events
            </button>
    </>
    )}

