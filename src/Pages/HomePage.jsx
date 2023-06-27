import React from "react";
import "../Styles/HomePage.css";
import MainLandingPage from "../components/componentsByHammad/HomePage/MainLandingPage";
import CategoryPage from "./CategoryPage"

function HomePage() {
  return <div className="width-100">
    <MainLandingPage/>
    <CategoryPage/>
  </div>;
}

export default HomePage;
