import React from "react";
import AboutPage from "./Pages/AboutPage";
import CategoryPage from "./Pages/CategoryPage";
import { Routes, Route } from "react-router-dom";
import ProductFromCategoryPage from "./Pages/ProductFromCategoryPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";

export default function MainApp() {
  return (
    <div className="width-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:cata" element={<ProductFromCategoryPage />} />
        <Route path="/:cata/:prodId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
