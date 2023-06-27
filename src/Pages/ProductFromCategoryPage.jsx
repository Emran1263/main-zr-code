import React from "react";
import "../Styles/ProductFromCategoryPage.css";
import ProductFromCategory from "../components/componentsByAhmad/ProductFromCategory";
import MoreProducts from "../components/componentsByAhmad/ProductFromCategory/MoreProducts";

function ProductFromCategoryPage() {
  return (
    <div>
      <ProductFromCategory />
      <MoreProducts />
    </div>
  );
}

export default ProductFromCategoryPage;
