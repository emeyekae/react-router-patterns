import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";


function DogList({ dogs }) {
  return (
    <div className="DogList">

          <h2 className="TopText">Click On Dog Name for more information.</h2>
          <div className=""> {dogs.map(d => (
          <div className="" key={d.name}> 
          <Link to={`/dogs/${d.name.toLowerCase()}`}>        
            <img src={`/${d.src}.jpg`} alt={d.name}/>
          </Link>  
            <h3 className="DogName">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
