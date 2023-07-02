import React from "react";
import ProductCard from "../ProductCard";
const products1 = [
  {
    id: 1,
    name: "Imaging Devices",
    image: "./images/category/imagingDevices.png",
  },
  {
    id: 2,
    name: "Cardiovascular Devices",
    image: "./images/category/cardio.png",
  },
  {
    id: 3,
    name: "Respiratory Devices",
    image: "./images/category/respiratory.png",
  },
  {
    id: 4,
    name: "Orthopedic Devices",
    image: "./images/category/ortho.png",
  },
  {
    id: 5,
    name: "Dental Devices",
    image: "./images/category/dental.png",
  },
  {
    id: 6,
    name: "Surgical Devices",
    image: "./images/category/surgical.png",
  },
];
const products2 = [
  {
    id: 1,
    name: "Life Care Equipment",
    image: "./images/category/lifeCare.png",
  },
  {
    id: 2,
    name: "Rehabilitation Devices",
    image: "./images/category/rehab.png",
  },
  {
    id: 3,
    name: "Home Care Equipment",
    image: "./images/category/homecare.png",
  },
  {
    id: 4,
    name: "Laboratory Equipment",
    image: "./images/category/lab.png",
  },
  {
    id: 5,
    name: "Hollowares",
    image: "./images/category/hollowares.png",
  },
  {
    id: 6,
    name: "Plastic Holloware",
    image: "./images/category/plasticHollowares.png",
  },
];
function Category() {
  return (
    <div className="width-100 categoryPageMain">
      <div className="res-1440-in-heavy categoryPageSec">
        <div className="mainHeadingDiv">
          <h1 className="mainHeading">Our Categories</h1>
          <div className="headingLine"></div>
        </div>
        <div className="sectionMain">
          <h2 className="sectionHeading">Medical Devices</h2>
          <div className="productListView">
            {products1.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
        <div className="sectionMain">
          <h2 className="sectionHeading">Medical Equipment</h2>
          <div className="productListView">
            {products2.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
