import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-work">
      <div className="container">
        <div className="text-box">
          <h1>How it Works</h1>
          <p>Curious on how to purchase our artwork? follow the steps below.</p>
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
              <p>
                Select/click on any portrait to add to cart
              </p>
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
                Sit back and expect our team to deliver your portrait to your doorstep
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
