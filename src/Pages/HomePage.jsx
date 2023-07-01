import React from "react";
import "../Styles/HomePage.css";
import MainLandingPage from "../components/componentsByHammad/HomePage/MainLandingPage";
import CategoryPage from "./CategoryPage"
import Manufacturer from "../components/componentsByHammad/HomePage/Manufacturer";
import GreenItemComp from "../components/componentsByHammad/HomePage/GreenItemComp";

function HomePage() {
  return <div className="width-100">
    <MainLandingPage/>
    <Manufacturer/>
    <GreenItemComp/>
    <CategoryPage/>
  </div>;
}

export default HomePage;
