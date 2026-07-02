import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { supabase } from "../Utils/SuperbaseClient";
import "./PortraitRequestModal.css";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  description: "",
  size: "",
  budget: "",
  deadline: "",
};

const PortraitRequestModal = ({ onClose }) => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  useLayoutEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" }
    );
  }, []);

  const handleClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 0.25,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      // Adjust table/column names to match your Supabase schema.
      const { error } = await supabase.from("PortraitRequests").insert([
        {
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          description: form.description,
          size: form.size,
          budget: form.budget,
          deadline: form.deadline,
        },
      ]);

      if (error) throw error;

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.log(err.message);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="portrait-modal-overlay"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose();
      }}
    >
      <div className="portrait-modal" ref={modalRef}>
        <button className="portrait-modal-close" onClick={handleClose}>
          <X size={20} />
        </button>

        <h2>Request a Portrait</h2>
        <p className="portrait-modal-sub">
          Tell us about the piece you'd like commissioned, and we'll get back
          to you with details.
        </p>

        {status === "success" ? (
          <div className="portrait-modal-success">
            <p>
              Thanks! Your request has been received. We'll be in touch
              shortly.
            </p>
            <button className="cta-1" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="portrait-modal-form">
            <div className="form-row">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row-group">
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="subject">Who / what is the portrait of?</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="e.g. Yourself, a musician, a loved one"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="description">Describe your vision</label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Style, mood, colors, references — anything that helps us understand what you're picturing"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row-group">
              <div className="form-row">
                <label htmlFor="size">Preferred size</label>
                <select
                  id="size"
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                >
                  <option value="">Select size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="Not sure">Not sure yet</option>
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="budget">Budget range</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder="e.g. ₦150,000 - ₦300,000"
                  value={form.budget}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <label htmlFor="deadline">Do you have a deadline?</label>
              <input
                type="text"
                id="deadline"
                name="deadline"
                placeholder="e.g. Needed by August 20th, or flexible"
                value={form.deadline}
                onChange={handleChange}
              />
            </div>

            {status === "error" && (
              <p className="portrait-modal-error">
                Something went wrong. Please try again.
              </p>
            )}

            <button type="submit" className="cta-1" disabled={submitting}>
              {submitting ? "Sending..." : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PortraitRequestModal;