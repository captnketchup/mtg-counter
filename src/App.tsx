import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GridElement } from "./components/GridElement";

function App() {
  return (
    <div className="grid grid-rows-2 w-screen h-screen">
      <GridElement count={0} orientation="down"/>
      <GridElement count={0}/>
    </div>
  );
}

export default App;
