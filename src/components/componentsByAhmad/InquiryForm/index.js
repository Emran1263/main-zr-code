import React from "react";
import InquiryForm from "./InquiryForm";
import "../../../Styles/InquiryPage.css";

function InquiryMain() {
  return (
    <div className="res-1440-40 InquiryPageMain">
      <h1 className="IFHeading">Inquiry Form</h1>
      <div className="InquiryPageSec">
        <InquiryForm />
      </div>
    </div>
  );
}

export default InquiryMain;
