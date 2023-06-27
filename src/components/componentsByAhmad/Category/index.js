import React from "react";
import ProductCard from "../ProductCard";
const products = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
  {
    id: 4,
    name: "Product 4",
  },
  {
    id: 5,
    name: "Product 5",
  },
  {
    id: 6,
    name: "Product 6",
  },
];
function Category() {
  return (
    <div className="res-1440-in categoryPageMain">
      <div className="res-1440-40 categoryPageSec">
        <div className="mainHeadingDiv">
          <h1 className="mainHeading">Our Categories</h1>
          <div className="headingLine"></div>
        </div>
        <div className="sectionMain">
          <h2 className="sectionHeading">Medical Devices</h2>
          <div className="productListView">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
        <div className="sectionMain">
          <h2 className="sectionHeading">Medical Equipment</h2>
          <div className="productListView">
            {products.map((p) => (
              <ProductCard product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
