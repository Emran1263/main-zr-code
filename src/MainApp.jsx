import React from "react";
import AboutPage from "./Pages/AboutPage";
import CategoryPage from "./Pages/CategoryPage";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import ProductFromCategoryPage from "./Pages/ProductFromCategoryPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
>>>>>>> 0dfa6559b4210a2d034f180716e526b1b8cda544
import HomePage from "./Pages/HomePage";

export default function MainApp() {
  return (
    <div className="width-100">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
=======
      {/* <Footer /> */}
      {/* <AboutPage /> */}
      {/* <CategoryPage /> */}
      {/* <ProductFromCategoryPage /> */}
      <HomePage/>
>>>>>>> 0dfa6559b4210a2d034f180716e526b1b8cda544
    </div>
  );
}
