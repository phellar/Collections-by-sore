import React, { useLayoutEffect, useRef } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import Supremos from "../assets/Supremos.JPG";
import Asake from "../assets/asake.jpeg";
import Bnxn from "../assets/new-buju.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// How long each image stays "in front" before rotating (ms)
const ROTATE_INTERVAL = 3200;
// How long the swap transition itself takes (s)
const ROTATE_DURATION = 0.9;

// Slot positions for a 3-image stack. front = big + centered + straight,
// backLeft tilts left, backRight tilts right.
const SLOTS = {
  front: { xPercent: 0, yPercent: 0, scale: 1, zIndex: 3, opacity: 1, rotation: 0 },
  backLeft: { xPercent: -22, yPercent: 10, scale: 0.72, zIndex: 1, opacity: 0.85, rotation: -12 },
  backRight: { xPercent: 22, yPercent: -8, scale: 0.72, zIndex: 2, opacity: 0.85, rotation: 12 },
};

const SLOT_ORDER = ["front", "backLeft", "backRight"];

const Hero = () => {
  const heroRef = useRef(null);
  const imageRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const images = [Supremos, Asake, Bnxn];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial hero animation
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 1,
        },
      });

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
          imageRefs.current,
          {
            opacity: 0,
            scale: 0.8,
            y: 100,
            stagger: 0.1,
          },
          "-=0.7",
        );

      // Scroll animation on the whole stack
      gsap.to(".hero-image-stack", {
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

      // Set initial slot positions (image 0 = front, 1 = backLeft, 2 = backRight)
      imageRefs.current.forEach((el, i) => {
        gsap.set(el, SLOTS[SLOT_ORDER[i]]);
      });

      // Rotation loop
      const interval = setInterval(() => {
        activeIndexRef.current = (activeIndexRef.current + 1) % 3;

        imageRefs.current.forEach((el, i) => {
          // Figure out which slot this image should now occupy,
          // based on its offset from the new active index
          const offset = (i - activeIndexRef.current + 3) % 3;
          const slotKey = SLOT_ORDER[offset];

          gsap.to(el, {
            ...SLOTS[slotKey],
            duration: ROTATE_DURATION,
            ease: "power3.inOut",
          });
        });
      }, ROTATE_INTERVAL);

      return () => clearInterval(interval);
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

          <div className="hero-image-stack">
            {images.map((src, i) => (
              <img
                key={src}
                ref={(el) => (imageRefs.current[i] = el)}
                src={src}
                alt="Sore Adebisi portrait collection piece"
                className="hero-stack-img"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;