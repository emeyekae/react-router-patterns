import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import NavBar from "./NavBar";



function App() {
  const [dogs, setDogs] = useState({ data: null, isLoading: true});

  useEffect(() => {async function loadDogs(){
      const response = await axios.get("http://localhost:5001/dogs")
        setDogs({  data: response.data,isLoading: false})}
    loadDogs()
  }, [])

  if (dogs.isLoading) {
    return <h1>L-0-A-D-I-N-G</h1> 
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
          <div className="container">
            <RouteList dogs={dogs.data} />
          </div>
      </BrowserRouter>
    </div>
  );
}


async function getDogs() {
  console.log("api: getDogs");
  const resp = await axios.get("http://localhost:5001/dogs");
  return resp.data;
}

async function getDog(id) {
  console.log("api: getDog", id);
  const resp = await axios.get(`http://localhost:5001/dogs/${id}`);
  return resp.data;
}

export default App;
export { getDog, getDogs };