import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import SoreLogo from "../assets/SORE-LOGO.jpeg";
import { useCart } from "../Context/CartContext";
import Cart from './Cart'
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, setCartOpen } = useCart();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="/" onClick={closeMenu}>
              <img src={SoreLogo} alt="Logo" className="logo" />
            </a>

            <div className="nav-actions">
              <button
                className="cart-icon-btn"
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
              >
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="cart-badge">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </button>

              <div
                className={`menu-toggle ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className={`overlay ${menuOpen ? "active" : ""}`}>
        <ul className="menu">
          <li><a href="/about-collection" onClick={closeMenu}>About our Collection</a></li>
          <li><a href="/the-artist" onClick={closeMenu}>The Artist</a></li>
          <li><a href="/contact-us" onClick={closeMenu}>Contact Us</a></li>
          <div className="socials"></div>
        </ul>
      </div>

      <Cart />
    </>
  );
};

export default Header;