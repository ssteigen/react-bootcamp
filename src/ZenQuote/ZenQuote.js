import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import "./ZenQuote.css";

export default function ZenQuote(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get("https://api.github.com/zen").then((response) => {
      setTimeout(
        function () {
          setQuote(response.data);
          setIsLoading(false);
        }.bind(this),
        1000
      );
    });
  }, [])

  return (
    <div className="ZenQuote">
      <h1>Always remember...</h1>
      {isLoading ? (
        <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} />
      ) : (
        <p>{quote}</p>
      )}
    </div>
  );
}

