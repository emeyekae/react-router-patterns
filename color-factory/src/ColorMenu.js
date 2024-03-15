import React from "react";
import { Link } from "react-router-dom";
import "./ColorMenu.css";

function ColorMenu({colors}) {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorMenu">
      <header className="ColorMenu-header">
        <h1 className="ColorMenu-title">Welcome to the color factory.</h1>
        <h1>
          <Link className="ColorMenu" to="/colors/new">Add a color</Link>
        </h1>
      </header>
      <div className="ColorMenu-info">
        <p>Please select a color.</p>
        <ul className="list" >{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorMenu;
