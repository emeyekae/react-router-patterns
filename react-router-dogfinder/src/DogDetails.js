
import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./DogDetails.css";


function DogDetails({ dog }) {

  if (!dog) return <Navigate to="/dogs" />

  return (
    <div className="DogDetails">
      <div className="">
        <img src={`/${dog.src}.jpg`} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age} years old</h3>
        <ul>
          {dog.facts.map((fact, x) => (<li key={x}>{fact}</li>))}
        </ul>
        <Link to="/dogs" className="GoBack">Go Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;
