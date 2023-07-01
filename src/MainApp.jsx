import React from "react";
import Footer from "./components/componentsByHammad/Footer";
import AboutPage from "./Pages/AboutPage";
import CategoryPage from "./Pages/CategoryPage";
import HomePage from "./Pages/HomePage";

export default function MainApp() {
  return (
    <div className="width-100">
      <CategoryPage/>
      <HomePage/>
    </div>
  );
}
