import React, { useLayoutEffect, useRef } from "react";
import "./ShortAbout.css";
import Ayra from "../assets/Ayra-about.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ShortAbout = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },

        defaults: {
          duration: 1,
          ease: "power3.out",
        },
      });

      tl.from(".textbox h1", {
        opacity: 0,
        x: -80,
      })

        .from(
          ".textbox p",
          {
            opacity: 0,
            y: 50,
          },
          "-=0.5",
        )

        .from(
          ".btn-box-1",
          {
            opacity: 0,
            y: 30,
          },
          "-=0.4",
        )

        .from(
          ".about-box img",
          {
            opacity: 0,
            x: 100,
            scale: 0.85,
          },
          "-=0.8",
        );

      // image parallax

      gsap.to(".about-box img", {
        y: -100,

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top bottom",

          end: "bottom top",

          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="short-about">
      <div className="container">
        <div className="about-box">
          <div className="textbox">
            <h1>About our Collection</h1>
            <h3 className="highlight">( Inside the Mind of the Music )</h3>
            <p>
              Inside the Mind of the Music is an ongoing portrait series that
              reimagines musicians not as public figures to be documented, but
              as worlds to be explored. Rather than focusing solely on physical
              likeness, the collection investigates the emotional, cultural, and
              symbolic landscapes that exist around an artist’s music.
            </p>

            <div className="btn-box-1">
              <Link to="/about-collection" className="cta">
               Read More{" "}
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
          </div>

          <img src={Ayra} alt="Ayra-star" />
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
