import React, { useEffect } from "react";
import SearchBar from "../components/componentsByHammad/Navbar/SearchBar";
import Header from "../components/componentsByHammad/Navbar/Header";
import AllInquiryMain from "../components/componentsByAhmad/InquiryForm/AllInquiryMain";

function AllInquiry() {
  useEffect(()=>{
    document.title= "Send Inquiry | ZR Surgicals"


  },[])
  return (
    <div className="width-100" style={{marginTop:"4em"}}>
      <Header/>
      <SearchBar/>
      <AllInquiryMain />
    </div>
  );
}

export default AllInquiry;
