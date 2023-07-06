import React, { useEffect } from "react";
import CategoryPage from "./CategoryPage";
import SearchBar from "../components/componentsByHammad/Navbar/SearchBar";
import Header from "../components/componentsByHammad/Navbar/Header";
export default function MainCatePage() {
  useEffect(() => {
    document.title = "Products | ZR Surgicals";
  }, []);
  return (
    <div className="width-100" style={{marginTop:"4em"}}>
      <Header />
      <SearchBar />
      <CategoryPage />
    </div>
  );
}
