import React, { useState } from "react";
import SoreLogo from "../assets/SORE-LOGO.jpeg";
import "./Header.css";
// import { Instagram, Twitter, Facebook, Twitch  } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#hero" onClick={closeMenu}>
              <img src={SoreLogo} alt="Logo" className="logo" />
            </a>

            <div
              className={`menu-toggle ${menuOpen ? "active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>

      <div className={`overlay ${menuOpen ? "active" : ""}`}>
        <ul className="menu">
          <li><a href="#about" onClick={closeMenu}>About Sore</a></li>
          <li><a href="#contact" onClick={closeMenu}>Collections</a></li>
          <li><a href="#archive" onClick={closeMenu}>My Archive</a></li>
          <li><a href="#hero" onClick={closeMenu}>Contact</a></li>
        <div className="socials">
          {/* <a href="https://www.instagram.com/sore.adebisi/" target="_blank" rel="noopener noreferrer">  
            <Instagram />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://www.facebook.com/sore.adebisi" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a> */}
          {/* <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
            <Twitch />
          </a> */}
        </div>
        </ul>
      </div>
    </>
  );
};

export default Header;