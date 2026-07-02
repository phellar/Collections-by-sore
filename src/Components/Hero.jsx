import React, { useLayoutEffect, useRef } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

      // Initial hero animation
      tl.from(".badge", {
        opacity: 0,
        y: 40,
      })
        .from(
          ".content h1",
          {
            opacity: 0,
            y: 80,
            stagger: 0.15,
          },
          "-=0.5",
        )
        .from(
          ".pg p",
          {
            opacity: 0,
            y: 40,
          },
          "-=0.5",
        )
        .from(
          ".cta-1",
          {
            opacity: 0,
            y: 30,
          },
          "-=0.4",
        )
        .from(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.8,
            y: 100,
          },
          "-=0.7",
        );

      // Scroll animation
      gsap.to(".hero-image", {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".content-box", {
        y: -80,
        opacity: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
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
                A curated selection of illustrated portraits reimagining
                musicians, creators, and cultural figures as worlds to explore.
                Discover collectible works from our collection and acquire pieces
                that translate sound, memory, and identity into visual language.
              </p>
            </div>
          </div>

          <div className="btn-box">
            <Link to="/collections" className="cta-1">
              Explore Our Collection{" "}
              <ArrowRight
                style={{
                  background: "white",
                  color: "red",
                  padding: 2,
                  borderRadius: 50,
                  marginLeft: 10,
                }}
              />
            </Link>
          </div>

          <img src={HeroImage} alt="Hero-image" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
