import React from "react";
import "./ShortAbout.css";
import Ayra from "../assets/Ayra-about.png";
import { Link } from "react-router-dom";

const ShortAbout = () => {
  return (
    <section className="short-about">
      <div className="container">
        <div className="about-box">
          <div className="textbox">
            <h1>About our Collection</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              amet eos corporis, perspiciatis doloribus autem dignissimos
              consectetur? Suscipit placeat libero qui voluptatem, vel soluta
              perferendis officia alias! Repudiandae, illum quasi? Harum non, ad
              illum iure, eveniet quibusdam exercitationem ducimus deleniti
              corporis sapiente excepturi repellat sunt officia enim!
              Distinctio, omnis aspernatur? Deleniti, laboriosam. Voluptatibus
              quisquam, perspiciatis quia officiis maxime explicabo iste!
            </p>
            <div className="btn-box-1">
              <Link to="/" className="cta-1">
                Learn More
              </Link>
            </div>
          </div>
          <img src={Ayra} alt="Ayra-star" />
          {/* <div className="about-image"></div> */}
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
