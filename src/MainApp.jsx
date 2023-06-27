import React from "react";
import Footer from "./components/componentsByHammad/Footer";
import AboutPage from "./Pages/AboutPage";
import CategoryPage from "./Pages/CategoryPage";
import ProductFromCategoryPage from "./Pages/ProductFromCategoryPage";

export default function MainApp() {
  return (
    <div className="width-100">
      {/* <Footer /> */}
      {/* <AboutPage /> */}
      {/* <CategoryPage /> */}
      <ProductFromCategoryPage />
    </div>
  );
}
