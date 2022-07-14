const { response } = require("express");

function Strapi(){
  const list = [
    { name:"Library Reading", date:"2022-07-28", time:"11:30:00.000", place: "City Hall" }
  ]
  console.log(list);

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
    doFetch(url);
    makeAPIdataUseful();
    console.log('>>>> Restock')
  };

    return (
    <>  
    <h1>Product List</h1>
            <ul style={{ listStyleType: "none" }}>{list}</ul>,
      <button onClick="refreshEvents()" >Refresh</button>
      
      </>
    );
  };
  

