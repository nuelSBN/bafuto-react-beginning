import React from "react";
import "./hero.css";

export default function Hero({ closeNavbar }) {
  return (
    <div className="hero" onClick={closeNavbar}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque incidunt
        nam ipsum.
      </p>
      <h1>
        we are <span>chicago</span>
      </h1>
      <button>get started</button>
    </div>
  );
}
