import React from "react";
import "./Input.css";


const Input = props => {
  return (
    <div>
      <div className="input">{props.input}</div>
      <div className="input">{props.answer}</div>
    </div>
  );
};

export default Input;
