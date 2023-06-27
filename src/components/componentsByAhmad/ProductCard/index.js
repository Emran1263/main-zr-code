/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="productCard">
      <div className="productCardImageView">
        <img src="./images/img-mri.png" className="productCardImage" />
      </div>
      <div className="productCardInfoView">
        <p className="productTitle">{product.name}</p>
        <img src="./images/goToDetails-icon.png" className="productIcon" />
      </div>
    </div>
  );
}

export default ProductCard;
