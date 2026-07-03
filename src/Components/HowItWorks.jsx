import React, { useLayoutEffect, useRef } from "react";
import "./HowItWorks.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card-1");

      // Heading

      gsap.from(".text-box h1", {
        opacity: 0,
        y: 80,

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 75%",

          toggleActions: "play none none none",
        },

        duration: 1,

        ease: "power3.out",
      });

      // Paragraph

      gsap.from(".text-box p", {
        opacity: 0,

        y: 40,

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 70%",

          toggleActions: "play none none none",
        },

        duration: 0.8,

        ease: "power3.out",
      });

      // Cards left/right bounce

      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,

          x: index % 2 === 0 ? -300 : 300,

          y: -120,

          rotation: index % 2 === 0 ? -12 : 12,

          scrollTrigger: {
            trigger: card,

            start: "top 85%",

            toggleActions: "play none none none",
          },

          duration: 1.2,

          ease: "bounce.out",
        });
      });

      // Number animation

      gsap.from(".num", {
        scale: 0,

        rotation: 360,

        stagger: 0.15,

        scrollTrigger: {
          trigger: ".step-container",

          start: "top 80%",

          toggleActions: "play none none none",
        },

        duration: 0.8,

        ease: "back.out(2)",
      });
    }, sectionRef);

    // Keep ScrollTrigger's trigger positions in sync with the page's real
    // height. Images loading late (elsewhere on the page), fonts swapping,
    // or arriving here via client-side route navigation (where window's
    // "load" event never fires again) can all leave ScrollTrigger's
    // calculations stale — this catches all of those cases.
    let refreshTimeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(refreshTimeout);
      refreshTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);
    });
    resizeObserver.observe(document.body);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="how-it-work">
      <div className="container">
        <div className="text-box">
          <h1>How it Works</h1>

          <p>Curious on how to purchase a piece from our collection? follow the steps below.</p>
        </div>

        <div className="step-container">
          <div className="card-1">
            <div className="num">
              <h1>1</h1>
            </div>

            <div className="instruction">
              <h3>Select your preferred portrait</h3>

              <p>
                Browse through our collection, select any portrait of your
                choice. you can select as many as you want
              </p>
            </div>
          </div>

          <div className="card-1">
            <div className="num">
              <h1>2</h1>
            </div>

            <div className="instruction">
              <h3>Add to Cart</h3>

              <p>Select/click on any portrait to add to cart</p>
            </div>
          </div>

          <div className="card-1">
            <div className="num">
              <h1>3</h1>
            </div>

            <div className="instruction">
              <h3>Checkout & Pay</h3>

              <p>
                Fill in your contact and delivery details in the checkout form
                and proceed to make payment for your portrait
              </p>
            </div>
          </div>

          <div className="card-1">
            <div className="num">
              <h1>4</h1>
            </div>

            <div className="instruction">
              <h3>Receive your portrait</h3>

              <p>
                Sit back and expect our team to deliver your portrait to your
                doorstep
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;