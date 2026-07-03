import React from "react";
import Header from "../Components/Header";
import "./TheArtist.css";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TheArtist = () => {
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
            <div className="artist-wrapper">
              <div className="g">
                <div className="text-1">
                  <h1>About the Artist</h1>
                  <p>(Sore Adebisi)</p>
                  <div className="artist-img"></div>
                </div>
              </div>
              <div className="b-1">
                <article className="write-up">
                  Sore Adebisi is a Lagos-based multidisciplinary visual artist,
                  creative director, and visual storyteller whose work
                  seamlessly blends contemporary African culture with bold
                  imagination. Renowned for his vibrant use of color, playful
                  compositions, and distinctive artistic voice, Sore creates
                  compelling visual experiences across digital illustration,
                  painting, string art, publishing, and emerging digital
                  mediums.
                  <br />

                  <br/>
                  His diverse body of work spans limited-edition art books, NFT
                  projects, large-scale visual campaigns, and immersive creative
                  concepts that challenge conventional boundaries while
                  remaining deeply rooted in storytelling. Beyond creating
                  artwork, Sore is recognized for his ability to develop strong
                  visual identities, conceptual frameworks, and creative
                  strategies that elevate brands, artists, and cultural
                  projects.

                  <br />
                  
                  <br/>
                  As the Creative Director for acclaimed Afrobeats artist Bnxn, Sore has played a key role in shaping the artist’s visual narrative, translating music into powerful visual experiences that resonate with audiences globally. Through every project, he combines artistic innovation with strategic thinking, establishing himself as one of the emerging creative voices redefining contemporary African visual culture.

                </article>
              </div>
            </div>
            <div className="text-2">
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheArtist;
