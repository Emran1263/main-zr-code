import React from "react";
import "../../../Styles/AboutPage.css";

export default function GreenItemComp() {
  return (
    <div className="width-100 OurPhilosophyCnt">
      <div className="greenBox"></div>
      <div className="OurPhilosophyContent res-1440-40">
        <div className="spacerFlexBox"></div>
        <div className="OurPhilosophyMainDiv">
          <div className="ZRCorporation">
            <div className="ZRCorporationHeadingLogo">
              <h1 className="ZRCorporationHeading">
                Transforming Healthcare, One Innovation at a Time
              </h1>
            </div>
            <p className="ZRCorporationParaP">
              Welcome to our company, a leading supplier of biomedical devices,
              life care equipment, hollow-ares, instruments for dental,
              surgical, and hospital furniture. We pride ourselves on providing
              high-quality medical products and excellent customer service.
            </p>
            <p className="ZRCorporationParaP">
              Our company was established with the aim of providing innovative
              medical solutions that meet the ever-changing needs of the
              healthcare industry. With years of experience in the industry, we
              have developed a deep understanding of the medical equipment
              market and have been able to provide our customers with reliable
              and efficient products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
