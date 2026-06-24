import React from "react";
import "./Hero.css";
import { Section } from "lucide";
import { Link } from "react-router-dom";
import HeroImage from "../Assets/hero-image.png";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="content-box">
          <div className="badge">
            <div className="dot"></div>
            <p>Introducing</p>
          </div>

          <div className="content">
            <h1>Sore Adebisi’s</h1>
            <h1 className="collection">Collection</h1>
            <div className="pg">
              <p>
                A curated selection of illustrated portraits created for
                Artists, Creators, and Cultural figures.Explore collectibles
                works from the archive and acquire pieces that celebrate figures
              </p>
            </div>
          </div>
          <div className="btn-box">
            <Link to='/' className="cta-1">Explore Our Collection</Link>
          </div>
          <img src={HeroImage} alt="Hero-image" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
