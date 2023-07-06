import React from "react";
import AboutPage from "./Pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import ProductFromCategoryPage from "./Pages/ProductFromCategoryPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import InquiryPage from "./Pages/InquiryPage";
import ContactPage from "./Pages/ContactPage";
import MainCatePage from "./Pages/MainCatePage";
import AllInquiry from "../src/Pages/AllInquiry"


export default function MainApp() {

  return (
    <div className="width-100">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<MainCatePage  />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:cata" element={<ProductFromCategoryPage />} />
        <Route path="/:cata/:prodId" element={<ProductDetailsPage />} />
        <Route path="/inquiry/:cata/:prodId" element={<InquiryPage />} />
        <Route path="/allinquiry" element={<AllInquiry/>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}
