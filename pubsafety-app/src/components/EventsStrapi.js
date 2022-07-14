import React from "react";
import ReactBootstrap from "react-bootstrap";
import axios from "axios";


import {
    Button,
    Container,
    Row,
    Input,
  } from "react-bootstrap";

  // simulate getting products from DataBase
const events = [
  { name:"Library Reading", date:"2022-07-28", time:"11:30:00.000", place: "City Hall" }
];

  const useDataApi = (initialUrl, initialData) => {
    const { useState, useEffect, useReducer } = React;
    const [url, setUrl] = useState(initialUrl);
  
    const [state, dispatch] = useReducer(dataFetchReducer, {
      isLoading: false,
      isError: false,
      data: initialData,
    });
    console.log(`useDataApi called`);
    useEffect(() => {
      console.log("useEffect Called");
      let didCancel = false;
      const fetchData = async () => {
        dispatch({ type: "FETCH_INIT" });
        try {
          const result = await axios(url);
          console.log("FETCH FROM URL");
          if (!didCancel) {
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: "FETCH_FAILURE" });
          }
        }
      };
      fetchData();
      return () => {
        didCancel = true;
      };
    }, [url]);
    return [state, setUrl];
  };

  
  const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case "FETCH_FAILURE":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error();
    }
  
  };

  const Events = (props) => {
    const [items, setItems] = React.useState(events);
    //  Fetch Data
    const { useState } = React;
    const [query, setQuery] = useState("api/events");
    const [{ data }, doFetch] = useDataApi(
      "http://localhost:1337/api/events",
      {
        data: [],
      }
    );
  
    console.log(`Rendering Products ${JSON.stringify(data)}`);
    console.log("what is data? ", data);

  const makeAPIdataUseful = () => {
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

  };

  const refreshEvents = (url) => {
    doFetch(url);
    makeAPIdataUseful();
    console.log('>>>> Restock')
  };
  
  return (
    <div>
    <div className="container">
    <div className="row">
    <div className="col-sm-8">col-sm-8</div>
    <div className="col-sm-4">col-sm-4</div>
    </div>
    </div>

       <Row>
          <form
            onSubmit={(event) => {
              refreshEvents(`http://localhost:1337/${query}`);
              console.log(`Restock called on ${query}`);
              event.preventDefault();
            }}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type="submit">Refresh Events</button>
          </form>
        </Row>
      </div>
    );  
  };

  ReactDOM.render(
    <Spa/>,
    document.getElementById('root1')
  );