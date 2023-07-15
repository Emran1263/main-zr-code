import React, { useEffect } from "react";
import CartPageComp from "../components/componentsByAhmad/CartPageComp";
import SearchBar from "../components/componentsByHammad/Navbar/SearchBar";
import Header from "../components/componentsByHammad/Navbar/Header";
function CartPage() {
  useEffect(()=>{
    document.title= "Cart Items Page | ZR Surgicals"


  },[])
  return (
    <div className="width-100" style={{marginTop:"4em"}}>
      <Header/>
      <SearchBar/>
      <CartPageComp />
    </div>
  );
}

export default CartPage;
