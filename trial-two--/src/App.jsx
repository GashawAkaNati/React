import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const COLORS = ["pink", "yellow", "red", "blue", "purple", "green"];
let count = 0;
function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    count++;
  };
  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}</div>

  )
}

export default App;