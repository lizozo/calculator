import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

import "./App.css";

const App = () => {
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  useEffect(() => {
    isNaN(input.slice(-1))
      ? setAnswer(math.evaluate(input.slice(0, -1)))
      : setAnswer(math.evaluate(input));
  }, [input]);

  const addInput = val => {
    if (isNaN(input.slice(-1)) && isNaN(val)) {
      setInput(input.slice(0, -1) + val);
    } else if (input.slice(0, 1) === "0" && input.length === 1 && val === "0") {
      setInput("0");
    } else if (input.slice(0, 1) === "/" || input.slice(0, 1) === "*") {
      setInput("");
    } else {
      setInput(input + val);
    }
  };
  const handleEqual = () => {
    answer ? setInput(answer + "") : setInput("");
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <Input input={input} answer={answer}></Input>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={handleEqual}>=</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
};

export default App;
