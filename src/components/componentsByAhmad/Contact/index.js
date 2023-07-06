import React from "react";
import LocationMap from "./LocationMap";
import ContactUs from "./ContactUs";
import "../../../Styles/ContactPage.css";

function ContactMain() {
  return (
    <div className="ContactPageMainDiv">
      <div className="res-1440-40 ContactPageSecDiv">
        <LocationMap />
        <ContactUs />
      </div>
    </div>
  );
}

export default ContactMain;
