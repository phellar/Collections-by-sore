import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { supabase } from "../Utils/SuperbaseClient";
import { ShoppingCart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./LatestCollection.css";
import { formatCurrency } from "../Shared/formatCurrency";

gsap.registerPlugin(ScrollTrigger);

const FILTERS = ["All Collection", "Available", "Latest"];

const LatestCollection = () => {
  const [portraits, setPortraits] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All Collection");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const skeletonContainerRef = useRef(null);
  const collectionRef = useRef(null);

  useEffect(() => {
    const fetchPortraits = async () => {
      try {
        setLoading(true);
        const { data, error: fetchError } = await supabase
          .from("Portrait")
          .select("*")
          .order("created_at", { ascending: false });

        if (fetchError) throw fetchError;
        setPortraits(data || []);
      } catch (err) {
        console.log(err.message);
        setError("Failed to load collections. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortraits();
  }, []);

  useEffect(() => {
    if (loading && skeletonContainerRef.current) {
      const skeletons =
        skeletonContainerRef.current.querySelectorAll(".skeleton-shimmer");

      gsap.fromTo(
        skeletons,
        { opacity: 0.4 },
        {
          opacity: 0.8,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          stagger: 0.15,
          ease: "power1.inOut",
        }
      );
    }
  }, [loading]);

  useLayoutEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".product-card");

      gsap.from(".box h1", {
        opacity: 0,
        y: 80,
        scrollTrigger: { trigger: collectionRef.current, start: "top 75%" },
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".box p", {
        opacity: 0,
        y: 40,
        scrollTrigger: { trigger: collectionRef.current, start: "top 70%" },
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".lc__filters", {
        opacity: 0,
        y: 40,
        scrollTrigger: { trigger: ".lc__filters", start: "top 80%" },
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(cards, {
        opacity: 0,
        y: 80,
        scale: 0.9,
        stagger: { amount: 0.8 },
        scrollTrigger: { trigger: ".card-group", start: "top 80%" },
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".product-img", {
        clipPath: "inset(0 0 100% 0)",
        stagger: 0.15,
        scrollTrigger: { trigger: ".card-group", start: "top 75%" },
        duration: 1.2,
        ease: "power4.out",
      });
    }, collectionRef);

    return () => ctx.revert();
  }, [loading, activeFilter, visibleCount]);

  const filteredPortraits =
    activeFilter === "All Collection"
      ? portraits
      : portraits.filter(
          (p) => p.category?.toLowerCase() === activeFilter.toLowerCase()
        );

  const displayedPortraits = filteredPortraits.slice(0, visibleCount);

  return (
    <section ref={collectionRef} className="collect">
      <div className="container">
        <div className="box">
          <h1>Latest Collections</h1>
          <p>
            Browse and purchase a selection of collectible artworks from our
            collections. Each piece is part of an ongoing body of work
            documenting the people, moments, and personalities shaping the
            entertainment and cultural industry.
          </p>
        </div>

        <div className="lc__filters">
          <div className="lc__filter-pills">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`lc__pill ${
                  activeFilter === f ? "lc__pill--active" : ""
                }`}
                onClick={() => {
                  setActiveFilter(f);
                  setVisibleCount(6);
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="lc__status-message error">
            <p>{error}</p>
          </div>
        )}

        {loading && (
          <div className="card-group" ref={skeletonContainerRef}>
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="product-card skeleton" key={idx}>
                <div className="product-img skeleton-shimmer skeleton-media" />
                <div className="product-desc">
                  <div className="skeleton-shimmer skeleton-text title" />
                  <div className="skeleton-shimmer skeleton-text price" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && !error && (
          <div className="card-group">
            {displayedPortraits.length > 0 ? (
              displayedPortraits.map((item) => (
                <div
                  className="product-card"
                  key={item.id}
                  onClick={() => navigate(`/portrait/${item.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="product-img"
                  />

                  <div className="product-description">
                    <h3>{item.name}</h3>
                    
                      <h3>{formatCurrency(item.price)}</h3>
                  </div>
                  
                  <div className="btn-box-2">
                    <button
                      className="sec-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: Number(item.price),
                          image: item.image_url,
                        });
                      }}
                    >
                      Add to Cart
                      <ShoppingCart size={16} className="icon" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-items">No artworks found in this category.</p>
            )}
          </div>
        )}

        {!loading && filteredPortraits.length > visibleCount && (
          <div className="lc__load-more">
            <button
              className="sec-btn"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestCollection;