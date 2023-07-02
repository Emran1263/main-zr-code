import React from "react";
import "../Styles/CategoryPage.css";
import ProductFromCategory from "../components/componentsByAhmad/ProductFromCategory";
import MoreProducts from "../components/componentsByAhmad/ProductFromCategory/MoreProducts";

function ProductFromCategoryPage() {
  return (
    <div className="width-100">
      <ProductFromCategory />
      <MoreProducts />
    </div>
  );
}

export default ProductFromCategoryPage;
