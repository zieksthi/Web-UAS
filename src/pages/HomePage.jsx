import React from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import "../index.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* SECTION 1: Hero dengan background full-width */}
      <section className="hero-section text-center text-white">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="fw-bold display-4">Welcome to JLD Tools</h1>
          <p className="lead">Temukan produk terbaik untuk kebutuhanmu!</p>
          <button className="btn btn-success mt-3">Lihat Produk</button>
        </div>
      </section>

      {/* SECTION 2: Tentang Kami */}
      <section className="info-section text-center bg-light text-dark py-5 w-100">
        <div className="container">
          <h2 className="fw-bold">Apa itu JLD Tools?</h2>
          <p>
            JLD Tools adalah toko online yang menyediakan alat-alat teknik berkualitas tinggi
            untuk industri dan rumahan.
          </p>
        </div>
      </section>

      {/* SECTION 3: Produk Unggulan */}
      <section className="featured-section bg-white text-dark py-5 w-100">
        <FeaturedProducts />
      </section>
    </div>
  );
};

export default HomePage;
