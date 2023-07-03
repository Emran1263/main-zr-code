import React from "react";

function ProductDisplayDetails() {
  return (
    <div className="res-1440-40 PDDetailsMainCnt">
      <div className="res-1440-in PDDetailsSecCnt">
        <NavPath />
        <div className="PDDetailsMainDiv">
          <div className="PDDetailsImageView">
            <img
              src="./images/details/artificialJoint.png"
              alt=""
              className="PDDetailsMainImg"
            />
            <div className="PDDetailsOtherImgView">
              <img
                src="./images/details/artificialJointGray.png"
                alt=""
                className="PDDetailsOtherImg"
              />
              <img
                src="./images/details/artificialJointGray.png"
                alt=""
                className="PDDetailsOtherImg"
              />
              <img
                src="./images/details/artificialJointGray.png"
                alt=""
                className="PDDetailsOtherImg"
              />
              <img
                src="./images/details/artificialJointGray.png"
                alt=""
                className="PDDetailsOtherImg"
              />
            </div>
          </div>
          <div className="PDDetailsInfoView">
            <h1 className="productNameText">Artificial Joint</h1>
            <p className="manufacturerText">Manufacturer</p>
            <img src="./images/ZRlogo.png" alt="" className="logoImg" />
            <p className="companyNameText">ZR Surgical & Corporation</p>
            <div className="reviewDiv">
              <img
                src="./images/ratingStars.svg"
                alt=""
                className="reviewImg"
              />
              <p className="reviewText">125+ reviews</p>
            </div>
            <p className="inStockText">In Stock</p>
            <p className="manufacturerText">Call for price quote</p>
            <p className="moreSpecsText">More Specifications</p>
            <div className="PDDetailsAssuranceDiv">
              <div className="assuranceImgView">
                <img
                  src="./images/specImg1.svg"
                  alt=""
                  className="assuranceImg"
                />
                <img
                  src="./images/specImg2.svg"
                  alt=""
                  className="assuranceImg"
                />
                <img
                  src="./images/specImg3.svg"
                  alt=""
                  className="assuranceImg"
                />
                <img
                  src="./images/specImg4.svg"
                  alt=""
                  className="assuranceImg"
                />
              </div>
              <div className="assuranceTextView">
                <p className="assuranceText">Superior Quality</p>
                <p className="assuranceText">On time delivery </p>
                <p className="assuranceText">ISO 9001 Safety</p>
                <p className="assuranceText">
                  D/A,D/P,MoneyGram,T/T,Western Union
                </p>
              </div>
            </div>
            <div className="PDDetailsCartAndContactDiv">
              <p className="addToCartButton">Add To Cart</p>
              <div className="PDDetailsContactDiv">
                <p className="sendInquiryButton">Send Inquiry</p>
                <div className="contactUsDiv">
                  <p className="contactUsButton">Contact Via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavPath() {
  return (
    <div className="navPath">
      <p className="navPathText">Home&nbsp;</p>
      <p className="navPathText">{">"}&nbsp;</p>
      <p className="navPathText">Products&nbsp;</p>
      <p className="navPathText">{">"}&nbsp;</p>
      <p className="navPathText">Categories&nbsp;</p>
      <p className="navPathText">{">"}&nbsp;</p>
      <p className="navPathText">Name&nbsp;</p>
      <p className="navPathText">{">"}&nbsp;</p>
      <p className="navPathText">Product Name</p>
    </div>
  );
}

export default ProductDisplayDetails;
