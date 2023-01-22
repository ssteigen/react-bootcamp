import React from "react";
import "./LottoBall.css";

export default function LottoBall({num}) {
  return (
    <div className="LottoBall">
      <div className="LottoBall-inner">{num}</div>
    </div>
  );
}
