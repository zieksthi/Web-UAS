import React from "react";

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
    description: "Pemotong rumput dengan tenaga potong tinggi.",
    image: "images/Lawn Unggulan.jpg",
  },
];

const FeaturedProducts = () => {
  return (
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
                <button className="btn btn-primary">Lihat Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
