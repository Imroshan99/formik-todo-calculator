import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Calculator.css";
const Calculator = () => {
  const [value, setValue] = useState();
  const [A, setA] = useState();
  const [B, setB] = useState();

  const addition = () => {
    setValue(parseFloat(A) + parseFloat(B));
  };
  const subtraction = () => {
    setValue(parseFloat(A) - parseFloat(B));
  };
  const multiplication = () => {
    setValue(parseFloat(A) * parseFloat(B));
  };
  const division = () => {
    setValue(parseFloat(A) / parseFloat(B));
  };
  return (
      <>
    <div className="calDiv">
        <div >
      <h1>I am in Calculator</h1>
      <div className="input">
        <label>Number 1:</label>
        <input type="number" value={A} onChange={(e) => setA(e.target.value)} />
      </div>
      <div className="input">
        <label>Number 2:</label>
        <input type="number" value={B} onChange={(e) => setB(e.target.value)} />
      </div>
      <div>
        <button onClick={addition}>ADD</button>
        <button onClick={subtraction}>SUBTRACT</button>
        <button onClick={multiplication}>MULTIPLICATION</button>
        <button onClick={division}>DIVISION</button>
      </div>
      <div className="valdiv"><h1>Answer:- {value}</h1></div>
      <Link to="/todolist">Go To Assignment 2</Link>
      </div>
    </div>
    </>
  );
};

export default Calculator;