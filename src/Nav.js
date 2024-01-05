import React from "react";
import "./styles/Nav.css";
import memeLogo from "./images/meme-logo.png";
export default function Nav() {
  //Navbar at the top of webpage
  return (
    <div className="nav">
      <div className="nav-left">
        <div>
          <img className="meme-logo" src={memeLogo} />
        </div>
        <div className="meme-generator">
          <span>Meme Generator</span>
        </div>
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
