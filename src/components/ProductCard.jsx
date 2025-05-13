import React from "react";

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <button className="btn btn-primary">Lihat Detail</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;