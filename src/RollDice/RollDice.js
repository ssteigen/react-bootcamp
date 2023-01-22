import React, { useState } from "react";
import Die from "./Die";
import "./RollDice.css";
import { choose } from "../helpers";

export default function RollDice({ title = "Roll Dice", numDice = 2, sides = [1, 2, 3, 4, 5, 6], className }) {

  const [rolling, setRolling] = useState(false);
  const [total, setTotal] = useState();
  const [dice, setDice] = useState(Array.from({ length: numDice }).fill(1));

  function roll() {
    setRolling(true);
    setDice(dice.map((n) => choose(sides)));
    setTotal(dice.reduce((a, b) => a + b, 0));

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  }

  return (
    <div className={`RollDice ${className} bg-gradient`}>
      <h1 className="RollDice-title">{title}</h1>
      <div className="RollDice-content">
        <div className="RollDice-dice">
          {dice.map((n, index) => (
            <Die rolling={rolling} num={n} key={index} />
          ))}
        </div>
        {total && <p>You rolled a {total}!</p>}
      </div>
      <button onClick={roll} disabled={rolling}>
        {rolling ? "Rolling" : "Roll Dice"}
      </button>
    </div>
  );
}
