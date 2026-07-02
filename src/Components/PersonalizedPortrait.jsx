import React from "react";
import "./PersonalizedPortrait.css";
import Rema from "../assets/Rema.png";

const PersonalizedPortrait = () => {
  return (
    <section className="personalized">
      <div className="container">
        <div className="bg-card">
          <div className="cont">
            <img src={Rema} alt="Sore's Art" className="cont-image" />
            <div className="cont-text-box">
              <h1>Need a Personalized Portrait ?</h1>
              <p>
                Reach out to us to commission a custom masterpiece tailored to
                your style, or browse our exclusive collection to find the
                perfect piece.
              </p>
              <div className="btn">
                <button type="submit" className="cta-1" id="btn">
                  Contact us
                </button>
              </div>
            </div>
          </div>
          {/* <div className="cont-box">
                </div> */}
        </div>
      </div>
    </section>
  );
};

export default PersonalizedPortrait;
