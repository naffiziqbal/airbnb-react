import React from "react";
import "./App.css";

// import logo from "./src/airbnb.png";

export default function NavBar() {
  return (
    <header className="container">
      <nav className="nav">
        <img className="nav--logo" src="./images/airbnb.png" />
      </nav>
      <section className="hero-section">
        <div className="hero-img">
          <img src="./images/Screenshot_72.png" alt="" />
        </div>
        <div className="hero-text">
          <h3>Online Experience</h3>
          <p>
            {" "}
            Join Uniqe and Interactive activities led by one of a kind hots
          </p>
          <p>-- all without leaving home</p>
        </div>
      </section>
    </header>
  );
}
