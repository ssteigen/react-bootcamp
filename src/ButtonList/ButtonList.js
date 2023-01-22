import React, { useState } from "react";
import { choose } from "helpers";

import './ButtonList.css';

export default function ButtonList(props) {
  const colors = ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"];

  const [color, setColor] = useState(choose(colors));

  return (
    <div className="ButtonList" style={{ backgroundColor: color }}>
      {colors.map((color, index) => {
        return (
          <button
            key={index}
            style={{ backgroundColor: color }}
            // Binding in the render function is not ideal!
            onClick={() => setColor(color)}
          >
            Click on me!
          </button>
        );
      })}
    </div>
  );
}
