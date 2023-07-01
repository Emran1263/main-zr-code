import React from "react";
import AboutPage from "./Pages/AboutPage";
import CategoryPage from "./Pages/CategoryPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function MainApp() {
  return (
    <div className="width-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
