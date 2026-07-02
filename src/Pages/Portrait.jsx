import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react";
import Header from "../Components/Header";
import { supabase } from "../Utils/SuperbaseClient";
import { useCart } from "../Context/CartContext";
import "./Portrait.css";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount));

const Portrait = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from("Portrait")
          .select("*")
          .eq("id", id)
          .single();

        if (fetchError) throw fetchError;
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err.message);
        setError("Failed to load product. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image_url,
      });
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <section className="product">
          <div className="container">
            <div className="product-container skeleton-page">
              <div className="bg-card skeleton-shimmer" />
              <div className="product-info">
                <div className="skeleton-shimmer skeleton-title" />
                <div className="skeleton-shimmer skeleton-price" />
                <div className="skeleton-shimmer skeleton-desc" />
                <div className="skeleton-shimmer skeleton-desc short" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Header />
        <section className="product">
          <div className="container">
            <div className="product-error">
              <p>{error || "Product not found."}</p>
              <button className="cta-1" onClick={() => navigate("/")}>
                Back to Collection
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="product">
        <div className="container">

          <button className="product-back" onClick={() => navigate("/")}>
            <ArrowLeft size={18} />
            <span>Back to Collection</span>
          </button>

          <div className="bg-card">
            <div className="">
              
         

            {/* ── Image ── */}
            <div className="">
              <img src={product.image_url} alt={product.name} />
              {product.category && (
                <span className="product-category-badge">{product.category}</span>
              )}
            </div>
               </div>

            {/* ── Info ── */}
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              {product.product_desc && (
                <p className="product-description">{product.product_desc}</p>
              )}
              <p className="product-price">{formatCurrency(product.price)}</p>

              {/* Quantity counter */}
              <div className="qty-wrapper">
                <p className="qty-label">Quantity</p>
                <div className="qty-counter">
                  <button
                    className="qty-btn"
                    onClick={handleDecrease}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-value">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={handleIncrease}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Buy now */}
              <button className="cta-1 product-buy-btn" onClick={handleAddToCart}>
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Portrait;