import React from "react";
import { useState } from "react";

function App(){
const [number, setNumber] = useState(0);

function increment(){
  setNumber(number + 1);
}
function decrement(){
  setNumber(number - 1);
}

  return(
    <div className="container">
    <h1>{number}</h1>
    <button onClick={increment}>+</button>
    <button id="dec" onClick={decrement}>-</button>
  </div>
);
}

export default App;
