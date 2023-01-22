import React, { useState } from "react";
import "./Coinflip.css";
import Coin from "./Coin";
import { choose } from "../helpers";
import imgHeads from "./cent-head.png";
import imgTails from "./cent-tail.png";

export default function Coinflip({ title = "Let's flip a coin!", className }) {
  const coins = [{ side: "heads", imgSrc: imgHeads }, { side: "tails", imgSrc: imgTails }];
  const sides = coins.map(coin => coin.side);

  const [flipping, setFlipping] = useState(false);
  const [side, setSide] = useState("heads");
  const [counters, setCounters] = useState({ numFlips: 0, numHeads: 0, numTails: 0 });

  function flipCoin() {
    setFlipping(true);
    const newSide = choose(sides);
    setSide(newSide);

    setTimeout(() => {
      setCounters({
        numFlips: counters.numFlips + 1,
        numHeads: counters.numHeads + (newSide === "heads" ? 1 : 0),
        numTails: counters.numTails + (newSide === "tails" ? 1 : 0)
      });
      setFlipping(false);
    }, 2000);
  }

  return (
    <div className={`CoinFlip ${className} bg-gradient`}>
      <h1 className="CoinFlip-title">{title}</h1>
      <div className="CoinFlip-content">
        <Coin side={side} flipping={flipping} />
        <p>
          Out of {counters.numFlips} {counters.numFlips === 1 ? "flip" : "flips"}, there have been{" "}
          {counters.numHeads} heads and {counters.numTails} tails.
        </p>
      </div>
      <button onClick={flipCoin} disabled={flipping}>
        {flipping ? "Flipping" : "Flip Coin"}
      </button>
    </div>
  );
}
