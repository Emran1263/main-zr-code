import React from "react";
import ProductFromCategory from "../components/componentsByAhmad/ProductFromCategory";
import MoreProducts from "../components/componentsByAhmad/ProductFromCategory/MoreProducts";
import Header from "../components/componentsByHammad/Navbar/Header";

function ProductFromCategoryPage() {
  return (
    <div className="width-100">
      <Header/>
      <ProductFromCategory />
      <MoreProducts />
    </div>
  );
}

export default ProductFromCategoryPage;
