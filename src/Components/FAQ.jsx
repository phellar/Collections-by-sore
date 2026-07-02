import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  // {
  //   id: 1,
  //   question: "What is the Collection all About?",
  //   answer:
    
  //     "Our.",
  // },
  {
    id: 2,
    question: "Can i request a portrait of a specific artist?",
    answer:
      "Yes. We welcome requests for portraits of musician, cultural icons, and other artist who inspire you. Every commission is approached with my signature conceptual style, creating a piece that reflect not just their likeness  but the essence of story and influence.",
  },
  {
    id: 3,
    question: "How long does a custom portrait take?",
    answer:
      "Each Custom portrait is created with care and attention to detail. Depending on the size and complexity of the piece, commission typically take 2-6 weeks to complete. You'll receive updates throughout the process, and an estimated completion date will be provided before work begins",
  },
  {
    id: 4,
    question: "Do you ship Internationally?",
    answer:
      "Yes, We ship worldwide. All artworks are carefully paxkaged to ensure they arrrive safely. Shipping costs and delivery time vary depending on your location and will be provided before your order is confirmed.",
  },
  {
    id: 5,
    question: "Can I return or exchange a Portrait?",
    answer:
      " Because each portrait is an original or custom-made artwork, returns and exchange are generally not accepted. However, if your artwork arrives damaged or there is an issue with your order, please get in touch as soon as possible, and we will work with you to find a suitabe solution.",
  },
  {
    id:6,
    question: "Can I Collaborate or work with you on the Collection",
    answer:
      "Absolutely. I'm always open to meningful collaborations with musicians, brands, galleries, Curators and creative partners whose vision aligns with our work. if you have a collaboration in mind, we'd liove to hear from you. please reach out through the contact page or email me your proposal.",
  },
];

const FAQ = () => {
  const [faqs] = useState(faqData);
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="faq">
      <div className="container">
        <div className="card">
          <div className="badge-box">
            <div className="badge">
              <div className="dot"></div>
              <p>FAQS</p>
            </div>
          </div>
          <div className="faq-text-box">
            <h1>Frequently Asked Questions</h1>
            <p>
              Got questions? Find answers about our collection, our process and
              how to commission your own portrait.
            </p>
            <div className="question-box">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className={`question ${openId === faq.id ? "open" : ""}`}
                  onClick={() => toggle(faq.id)}
                >
                  <div className="question-header">
                    <h5>{faq.question}</h5>
                    <span className="icon">
                      {openId === faq.id ? "−" : "+"}
                    </span>
                  </div>
                  {openId === faq.id && <p className="answer">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
