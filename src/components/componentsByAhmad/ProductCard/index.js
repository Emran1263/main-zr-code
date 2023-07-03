import React from "react";
import "../../../Styles/CategoryPage.css"


function ProductCard({ product }) {
  const { name, image } = product;
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
