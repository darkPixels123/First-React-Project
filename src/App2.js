import { useState } from "react";
import "./App.css";
import Blogs from "./Blogs";

function App2() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map((planet) => {
        isGasPlanet ? <h1 style={{color:"red"}}>{planet.name}</h1> : null;
      })}
    </div>
  );
}

export default App2;
