import React from "react";
import ProductDescSpecs from "./ProductDescSpecs";
import ProductDisplayDetails from "./ProductDisplayDetails";
import MoreProducts from "../ProductFromCategory/MoreProducts";
import "../../../Styles/ProductDetailsPage.css";

function ProductDetails() {
  return (
    <div className="width-100 ProductDetailsPageMain">
      <ProductDisplayDetails />
      <ProductDescSpecs />
      <MoreProducts />
    </div>
  );
}

export default ProductDetails;
