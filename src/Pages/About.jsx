import React, { useState } from "react";
import Header from "../Components/Header";
import "./About.css";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <section className="About-collection">
        <div className="container">
          <Link className="checkout-back" to={"/"}>
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <div className="abt-wrapper">
            <div className="abt-box" id="artist-img">
              <div className="text-1">
                <h1>About Our Collection</h1>
                <p>(Inside the Mind of the Music)</p>
                <article className="write-up">
                  {" "}
                  Inside the Mind of the Music is an ongoing portrait series
                  that reimagines musicians not as public figures to be
                  documented, but as worlds to be explored. Rather than focusing
                  solely on physical likeness, the collection investigates the
                  emotional, cultural, and symbolic landscapes that exist around
                  an artist’s music.
                  <br />
                  Each portrait serves as the entry point into a visual universe
                  constructed from references drawn from the artist’s sound,
                  personal mythology, cultural influence, memories, aspirations,
                  contradictions, and public perception. Through the combination
                  of realistic portraiture and playful symbolic imagery, the
                  works translate intangible elements—melodies, emotions,
                  lyrics, identity, fame, ambition, vulnerability, and
                  legacy—into visual language.
                </article>
              </div>
              <div className="abt-img"></div>
            </div>
            <div className="text-2">
              <article className="write-up">
                Recurring motifs such as flowers, cowries, currency, emojis,
                stars, the mascot character, graffiti markings, and floating
                objects function as visual clues, inviting viewers to decode the
                stories embedded within each composition. These symbols are not
                decorative additions but fragments of a larger narrative,
                revealing the complexities that exist beneath the surface of
                celebrity and performance.
                <br />
                By positioning the portrait within a constellation of symbols,
                the collection challenges traditional portraiture and asks a
                deeper question: What does music look like when transformed into
                memory, emotion, and imagination?
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
