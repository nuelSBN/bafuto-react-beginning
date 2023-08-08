import React from "react";
import "./about.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";

export default function About({ closeNavbar, handleClick, click }) {
  return (
    <div className="about_page">
      <Header click={click} handleClick={handleClick} />
    </div>
  );
}
