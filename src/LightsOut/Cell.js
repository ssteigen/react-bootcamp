import React from "react";
import "./Cell.css";

export default function Cell({flipCellsAroundMe, isLit}) {
  const handleClick = (e) => {
    flipCellsAroundMe();
  };
  
  return (
    <td
      className={`Cell ${isLit ? "Cell-lit" : ""}`}
      onClick={handleClick}
    />
  );
}
