import React, { useState } from "react";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header({ click, handleClick }) {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>
            <Link to="/">
              nuel<span>sbn</span>
            </Link>
          </h1>
        </div>
        <ul className={click ? "navbar active" : "navbar"}>
          <li className="active">
            <a href="/">home</a>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <a href="/">blog</a>
          </li>
          <li>
            <a href="/">portfolio</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
        <div className="btn_container">
          <button onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
}
