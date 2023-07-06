import React, { useEffect } from "react";
import ContactMain from "../components/componentsByAhmad/Contact";
import "../Styles/ContactPage.css";
function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | ZR Surgicals";
  }, []);
  return (
    <div className="width-100" style={{marginTop:"6em"}}>
      <ContactMain />
    </div>
  );
}

export default ContactPage;
