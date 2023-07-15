import React, { useEffect } from "react";
import ContactMain from "../components/componentsByAhmad/Contact";
import { Helmet } from 'react-helmet';

import "../Styles/ContactPage.css";
function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | ZR Surgicals";
  }, []);
  return (
    <div className="width-100" style={{marginTop:"6em"}}>
      <Helmet>
        <meta name="description" content="Contact us to get quote about your desire medical goods" />
      </Helmet>
      <ContactMain />
    </div>
  );
}

export default ContactPage;
