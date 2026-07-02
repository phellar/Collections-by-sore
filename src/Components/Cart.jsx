import React from "react";
import { X, Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { formatCurrency } from "../Shared/formatCurrency";



const Cart = () => {
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      <div
        className={`cart-backdrop ${cartOpen ? "active" : ""}`}
        onClick={() => setCartOpen(false)}
      />

      <aside className={`cart-drawer ${cartOpen ? "active" : ""}`}>
        <div className="cart-header">
          <h2 className="cart-title">Your Cart</h2>
          <button
            className="cart-close"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={48} strokeWidth={1} />
              <p>Your cart is empty.</p>
              <span>Add a piece from the collection to get started.</span>
            </div>
          ) : (
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  )}
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                    <div className="cart-item-controls">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={15} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>{formatCurrency(cartTotal)}</span>
            </div>
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Cart;
