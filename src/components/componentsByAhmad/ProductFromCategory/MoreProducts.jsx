import React from "react";
import "../../../Styles/CategoryPage.css"
import ProductCard from "../ProductCard";

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
<<<<<<< HEAD
    <div className="width-100 categoryPageMain">
      <div className="res-1440-in-heavy">
=======
    <div className="res-1440-40 productFromCategoryMain">
      <div className="res-1440-in productFromCategorySec">
>>>>>>> 0c0222f8f1cb9efb2c8ca31b1207c29a72f58e40
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
