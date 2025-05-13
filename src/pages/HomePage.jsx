import React from "react";
import "../index.css";

const featuredProducts = [
  {
    title: "Bor Listrik",
    description: "Bor listrik bertenaga tinggi cocok untuk semua pekerjaan.",
    image: "images/Bor Unggulan.jpg",
  },
  {
    title: "Impact Wrench",
    description: "Impact Wrench serbaguna untuk kebutuhan industri dan rumah.",
    image: "images/Impact Unggulan.jpg",
  },
  {
    title: "Pemotong Rumput",
    description: "Pemotong rumput yang memiliki tenaga memotong yang cepat dan kuat.",
    image: "images/Lawn Unggulan.jpg",
  },
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Hero section */}
      <div className="hero-section text-center py-5 text-dark">
        <div className="container">
          <h1 className="fw-bold display-4">Welcome to JLD Tools</h1>
          <p className="lead">Temukan produk terbaik untuk kebutuhanmu!</p>
          <button className="btn btn-success mt-3">Lihat Produk</button>
        </div>
      </div>

      {/* Produk Unggulan */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-dark">Produk Unggulan</h2>
        <div className="row justify-content-center">
          {featuredProducts.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-success">Lihat Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
