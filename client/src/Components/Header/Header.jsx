import React from "react";
import crypto from "../../assets/videos/crypto.mp4";
import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <video playsinline autoPlay muted loop>
          <source src={crypto} type="video/mp4" />
        </video>
        <h1>WELCOME TO STEVE'S CHAINALYSIS ASSESSMENT</h1>
      </header>
    </>
  );
}

export default Header;
