import React from "react";

export default function WhoWeare() {
  return (
    <div className="width-100 WhoWeAreCnt">
      <div className="greenBox"></div>
      <div className="WhoWeAreContent res-1440-40">
        <div className="spacerFlexBox"></div>
        <div className="WhoWeAreContentMainDiv">
          <div className="ZRCorporation">
            <div className="ZRCorporationHeadingLogo">
              <h1 className="ZRCorporationHeading">
                ZR Surgical & <br /> Corporation
              </h1>
              <img className="ZRCorporationImgLogo" src="/images/ZRlogo.png" alt="" />
            </div>
            <p className="ZRCorporationParaP">
              At ZR Surgical, we are passionate about advancing healthcare
              through cutting-edge medical equipment. As a leading manufacturer
              in the industry, we strive to revolutionize patient care and
              improve outcomes. With a dedicated team of experts and
              state-of-the-art technology, we design and develop innovative
              solutions that meet the evolving needs of healthcare professionals
              worldwide.
            </p>
          </div>
          <div className="WhoWeAreMainDivCnt">
            <div className="ZRCorporationHeadingLogo">
              <h1 className="ZRCorporationHeading">What We Do?</h1>
              <img className="ZRCorporationImgLogo" src="/images/logoZR.png" alt="" />
            </div>
            <p className="ZRCorporationParaP">
              Driven by a passion for innovation and a profound understanding of
              healthcare needs, we continuously strive to enhance the well-being
              of patients and streamline medical practices. Trust us to provide
              you with the most advanced and diverse range of medical equipment,
              empowering healthcare professionals to deliver exceptional care
              and improve lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
