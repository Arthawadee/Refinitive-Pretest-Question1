import "./App.css";
import React, { useState } from "react";

const checkPrime = (num) => {
  if (num < 2) return false;
  for (let k = 2; k < num; k++) {
    if (num % k === 0) {
      return false;
    }
  }
  return true;
};

function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return s * s === x;
}

function checkFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

function App() {
  const [inputNum, setInputNum] = useState("");
  const [selectedType, setSelectedType] = useState("isPrime");

  const handleChangeInputNum = (e) => {
    const inputVal = e.target.value;
    if (Number(inputVal) < 0) {
      setInputNum(1);
    } else {
      setInputNum(inputVal);
    }
  };

  const handleChangeSelectedType = (e) => {
    setSelectedType(e.target.value);
  };

  const renderAnswer = () => {
    if (selectedType === "isPrime") {
      return checkPrime(inputNum) ? "true" : "false";
    } else {
      if (inputNum) {
        return checkFibonacci(inputNum) ? "true" : "false";
      } else {
        return "false";
      }
    }
  };

  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <input
            type="number"
            value={inputNum}
            onChange={handleChangeInputNum}
          />
        </div>
        <div className="grid-item">
          <select value={selectedType} onChange={handleChangeSelectedType}>
            <option value="isPrime">isPrime</option>
            <option value="isFibonacci">isFibonacci</option>
          </select>
        </div>
        <div className="grid-item">{renderAnswer()}</div>
      </div>
    </div>
  );
}

export default App;