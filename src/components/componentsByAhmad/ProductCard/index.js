/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function ProductCard({ product }) {
  const { name, id, image } = product;
  return (
    <div className="productCard">
      <div className="productCardImageView">
        <img src={image} className="productCardImage" />
      </div>
      <div className="productCardInfoView">
        <p className="productTitle">{name}</p>
        <img src="./images/goToDetails-icon.png" className="productIcon" />
      </div>
    </div>
  );
}

export default ProductCard;
