import React from "react";
import "../../../Styles/Footer.css";

export default function Manufacturer() {
  return (
    <div className="res-1440-40 mainManufacturer">
      <img src="/images/ZRlogo.png" alt="" className="logoManufacturer" />
      <p className="paraManufacturer">ZR Surgical & Corporation</p>
      <h1 className="h1Manufacturer">Medical equipment manufacturers</h1>
      <p className="para2Manufacturer">
        Committed to excellence in manufacturing hospital equipment, delivering
        superior quality and efficiency to healthcare providers
      </p>
      <div className="QualityPolicyImages2">
        <span className="QualityPolicyImagesSpan">
          <img
            className="QualityPolicyImagesSpanImg"
            src="/images/image2.png"
            alt=""
          />
          <p className="QualityPolicyImagesSpanImgText">On time delivery</p>
        </span>
        <span className="QualityPolicyImagesSpan">
          <img
            className="QualityPolicyImagesSpanImg"
            src="/images/image1.png"
            alt=""
          />
          <p className="QualityPolicyImagesSpanImgText">Certified Materials</p>
        </span>
        <span className="QualityPolicyImagesSpan">
          <img
            className="QualityPolicyImagesSpanImg"
            src="/images/image3.png"
            alt=""
          />
          <p className="QualityPolicyImagesSpanImgText">
            Quality <br /> Checks
          </p>
        </span>
        <span className="QualityPolicyImagesSpan">
          <img
            className="QualityPolicyImagesSpanImg"
            src="/images/image4.png"
            alt=""
          />
          <p className="QualityPolicyImagesSpanImgText">
            After Sales <br />
            Customer Service
          </p>
        </span>
      </div>
    </div>
  );
}
