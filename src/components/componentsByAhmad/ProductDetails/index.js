import React from "react";
import ProductDescSpecs from "./ProductDescSpecs";
import ProductDisplayDetails from "./ProductDisplayDetails";
import "../../../Styles/ProductDetailsPage.css";

function ProductDetails() {
  return (
    <div className="width-100 ProductDetailsPageMain">
      <ProductDisplayDetails />
      <ProductDescSpecs />
    </div>
  );
}

export default ProductDetails;
