import { useState } from "react";
import "./App.css";
function App() {
  const [color, setcolor] = useState("#333");
  return (
    <div className="back-ground" style={{ backgroundColor: color }}>
      <div className="fixed">
        <div className="nav">
          <button
            onClick={() => {
              setcolor("red");
            }}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setcolor("olive");
            }}
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => {
              setcolor("yellow");
            }}
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setcolor("orange");
            }}
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => {
              setcolor("blue");
            }}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => {
              setcolor("green");
            }}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
