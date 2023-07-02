import React from "react";
import ProductCard from "../ProductCard";
import "../../../Styles/ProductFromCategoryPage.css";

const products = [
  {
    id: 1,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 2,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 3,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 4,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
];
function MoreProducts() {
  return (
    <div className="productFromCategoryMain">
      <div className="res-1440-heavy">
        <div className="moreFromCategoryHeaderView">
          <h1 className="moreFromCategoryH">
            More products from other categories
          </h1>
        </div>
        <div className="productListView">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoreProducts;
