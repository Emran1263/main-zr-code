import React from "react";
import AboutPage from "./Pages/AboutPage";
import CategoryPage from "./Pages/CategoryPage";
import { Routes, Route } from "react-router-dom";
import ProductFromCategoryPage from "./Pages/ProductFromCategoryPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import InquiryPage from "./Pages/InquiryPage";
import ContactPage from "./Pages/ContactPage";

export default function MainApp() {
  return (
    <div className="width-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/details" element={<ProductDetailsPage />} />
        <Route path="/test" element={<InquiryPage />} />
      </Routes>
    </div>
  );
}
