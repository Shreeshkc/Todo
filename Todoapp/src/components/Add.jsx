import React, { useState } from "react";
import TodoItem from "./TodoItem";

function Add() {
  const [color, setColor] = useState("black");

  return (
    <div className="container">
      <button
        className="add-cont"
        style={{ backgroundColor: color }}
        onClick={() => setColor(color === "black" ? "blue" : "black")}
      >
        Click me
      </button>
    </div>
  );
}

export default Add;
