import React, { useEffect } from "react";
import InquiryMain from "../components/componentsByAhmad/InquiryForm";
import SearchBar from "../components/componentsByHammad/Navbar/SearchBar";
import Header from "../components/componentsByHammad/Navbar/Header";
function InquiryPage() {
  useEffect(()=>{
    document.title= "Send Inquiry | ZR Surgicals"


  },[])
  return (
    <div className="width-100" style={{marginTop:"4em"}}>
      <Header/>
      <SearchBar/>
      <InquiryMain />
    </div>
  );
}

export default InquiryPage;
