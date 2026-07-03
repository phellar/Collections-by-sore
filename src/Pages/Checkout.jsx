import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../Context/CartContext";
import "./CheckOut.css";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

const CheckOut = ({ onBack }) => {
  const { cartItems, cartTotal, formatCurrency } = useCart();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted", { form, cartItems });
  };

  return (
    <>
      <Header />
      <section className="checkout">
        <div className="container">
          <Link to={'/collections'} className="checkout-back">
            <ArrowLeft size={18} />
            <span>Back to Collection</span>
          </Link>

          <div className="checkout-bg-card">
            <div className="checkout-cont">
              {/* ── Left — Form ── */}
              <div className="checkout-form-box">
                <h1>Checkout</h1>
                <p>Fill in your details and we'll get your piece to you.</p>

                <form className="checkout-form" onSubmit={handleSubmit}>
                  <div className="checkout-row">
                    <div className="checkout-field">
                      <label>first name</label>
                      <input
                        type="text"
                        name="FirstName"
                        placeholder="John"
                        value={form.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="checkout-field">
                      <label>Last name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="checkout-row">
                    <div className="checkout-field">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="checkout-field">
                      <label>phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+234 000 000 0000"
                        value={form.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="checkout-field full">
                    <label>Delivery Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="12 Victoria Island, Lagos"
                      value={form.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="checkout-row">
                    <div className="checkout-field">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Lagos"
                        value={form.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="checkout-field">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        placeholder="Lagos State"
                        value={form.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="cta-1 checkout-submit">
                    Place Order
                  </button>
                </form>
              </div>

              {/* ── Right — Order Summary ── */}
              <div className="checkout-summary-box">
                <h2>Order Summary</h2>

                <ul className="checkout-item-list">
                  {cartItems.map((item) => (
                    <li key={item.id} className="checkout-item">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="checkout-item-image"
                        />
                      )}
                      <div className="checkout-item-info">
                        <p className="checkout-item-name">{item.name}</p>
                        <p className="checkout-item-qty">
                          qty: {item.quantity}
                        </p>
                      </div>
                      <p className="checkout-item-price">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="checkout-divider" />

                <div className="checkout-total-row">
                  <span>total</span>
                  <span>{formatCurrency(cartTotal)}</span>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;