import React, { useState } from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";

export default function Home({ closeNavbar, handleClick, click }) {
  return (
    <div>
      <Header click={click} handleClick={handleClick} />
      <Hero closeNavbar={closeNavbar} />
      <Featured />
    </div>
  );
}
