import React from "react";
import "../../../Styles/InquiryPage.css";
import AllInquiryForm from "./AllInquiryForm";

function AllInquiryMain() {
  return (
    <div className="res-1440-40 InquiryPageMain">
      <h1 className="IFHeading">Inquiry Form</h1>
      <div className="InquiryPageSec">
        <AllInquiryForm />
      </div>
    </div>
  );
}

export default AllInquiryMain;
