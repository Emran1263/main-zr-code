import React from "react";
import "../../../Styles/CategoryPage.css";
import { Link } from "react-router-dom";

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
  {
    id: 5,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 6,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 7,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
  {
    id: 8,
    name: "Dental Devices",
    image: "./images/category/teeth.png",
  },
];
function ProductFromCategory({ filteredProducts,cata }) {
  return (
    <div className="width-100 categoryPageMain">
      <div className="res-1440-in-heavy">
        <div className="categoryPageSec">
          <div className="productFromCategorySec">
            <div className="navPath">
              <p className="navPathText">Home</p>
              <p className="navPathText">{">"}</p>
              <p className="navPathText">Products</p>
              <p className="navPathText">{">"}</p>
              <p className="navPathText">Categories</p>
              <p className="navPathText">{">"}</p>
              <p className="navPathText">Name</p>
            </div>
            <div className="categoryHeadAndSortDiv">
              <div className="categoryHeaderView">
                <h1 className="categoryProductsFromH">Products From:</h1>
                <h1 className="categoryNameH">Dental Devices</h1>
              </div>
            </div>
            <div className="productListView">
              {filteredProducts.map((product) => (
                <ProductCardForCata product={product} cata={cata}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFromCategory;

function ProductCardForCata({ product,cata }) {
  return (
    <div className="productCard">
      <div className="productCardImageView">
        <img src={product.image.url} className="productCardImage" />
      </div>
      <Link to={`/${cata}/${product.id}`}>
        <div className="productCardInfoView">
          <p className="productTitle">{product.name}</p>
          <img src="./images/goToDetails-icon.png" className="productIcon" />
        </div>
      </Link>
    </div>
  );
}
