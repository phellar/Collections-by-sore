import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortraitRequestModal from "./PortraitRequestModal";
import "./PersonalizedPortrait.css";
import Rema from "../assets/Rema.png";

gsap.registerPlugin(ScrollTrigger);

const PersonalizedPortrait = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cont-image", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".cont-text-box", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    const img = imgRef.current;
    if (img && !img.complete) {
      img.addEventListener("load", () => ScrollTrigger.refresh());
    }

    return () => {
      ctx.revert();
      if (img) img.removeEventListener("load", () => ScrollTrigger.refresh());
    };
  }, []);

  return (
    <section className="personalized" ref={sectionRef}>
      <div className="container">
        <div className="bg-card">
          <div className="cont">
            <img
              src={Rema}
              alt="Sore's Art"
              className="cont-image"
              id="cnt-img"
              ref={imgRef}
            />
            <div className="cont-text-box">
              <h1>Need a Personalized Portrait ?</h1>
              <p>
                Reach out to us to commission a custom masterpiece tailored to
                your style, or browse our exclusive collection to find the
                perfect piece.
              </p>
              <div className="btn">
                <button
                  type="button"
                  className="cta-1"
                  id="btn"
                  onClick={() => setShowModal(true)}
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <PortraitRequestModal onClose={() => setShowModal(false)} />
      )}
    </section>
  );
};

export default PersonalizedPortrait;