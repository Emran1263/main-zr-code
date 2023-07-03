import React from "react";
import AboutPage from "./Pages/AboutPage";
import CategoryPage from "./Pages/CategoryPage";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import ProductFromCategoryPage from "./Pages/ProductFromCategoryPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
=======
>>>>>>> 0c0222f8f1cb9efb2c8ca31b1207c29a72f58e40
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

export default function MainApp() {
  return (
    <div className="width-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
<<<<<<< HEAD
        <Route path="/test" element={<ProductFromCategoryPage />} />
        <Route path="/details" element={<ProductDetailsPage />} />
=======
        <Route path="/test" element={<CartPage />} />
>>>>>>> 0c0222f8f1cb9efb2c8ca31b1207c29a72f58e40
      </Routes>
    </div>
  );
}
