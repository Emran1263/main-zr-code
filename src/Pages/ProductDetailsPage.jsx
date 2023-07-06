import React from "react";
import ProductDetails from "../components/componentsByAhmad/ProductDetails";
import "../Styles/ProductDetailsPage.css";
import SearchBar from "../components/componentsByHammad/Navbar/SearchBar";
import Header from "../components/componentsByHammad/Navbar/Header";

function ProductDetailsPage() {
  
  return (
    <div style={{marginTop:"4em"}}>
      <Header/>
      <SearchBar/>
      <ProductDetails />
    </div>
  );
}

export default ProductDetailsPage;
