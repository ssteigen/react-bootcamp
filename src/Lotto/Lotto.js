import React, { useState } from "react";
import './Lotto.css';
import LottoBall from "./LottoBall";

export default function Lotto({title = "Lottery", numBalls = 6, maxNum = 40}) {
  const [nums, setNums] = useState(Array.from({ length: numBalls }));

  function handleClick() {
    setNums(nums.map(
      (n) => Math.floor(Math.random() * maxNum) + 1
    ));
  }

  return (
    <div className={`Lotto bg-gradient`}>
      <h1 className="Lotto-title">{title}</h1>
      <div className="Lotto-content">
        {nums.map((n, index) => (
          <LottoBall num={n} key={index} />
        ))}
      </div>
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

