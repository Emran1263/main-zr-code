/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function LocationMap() {
  return (
    <div className="ContactPageLocationMainDiv">
      <h1 className="ContactPageHeading">Contact</h1>
      <div className="ContactPageLocationMapDiv">
        <iframe
          className="Map"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d471.7575570269424!2d74.5439183983102!3d32.57137186025293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1688410345722!5m2!1sen!2s"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default LocationMap;
