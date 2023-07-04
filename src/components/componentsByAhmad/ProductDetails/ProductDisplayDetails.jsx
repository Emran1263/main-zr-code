import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";

function ProductDisplayDetails({ particular_data }) {
  const [ImagesAssets, setImageAssets] = useState([]);
  const [currentImg, setCurrentImg] = useState()
  useEffect(() => {
    const getallimages = async () => {
      try {
        const product = await commerce.products.retrieve(particular_data.id);
        const assets = product.assets;
        setImageAssets(assets)
        console.log(ImagesAssets)

      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getallimages();
    setCurrentImg(particular_data.image.url)
  }, []);
  
  

  return (
    particular_data && (
      <div className="res-1440-40 PDDetailsMainCnt">
        <div className="res-1440-in PDDetailsSecCnt">
          <NavPath />
          <div className="PDDetailsMainDiv">
            <div className="PDDetailsImageView">
              <img
                src={currentImg}
                alt=""
                className="PDDetailsMainImg"
              />
              <div className="PDDetailsOtherImgView">
                {ImagesAssets.map((item, index) => {
                  return ImagesAssets.length > 0 &&  (
                    <img
                      key={index}
                      src={item.url}
                      alt={particular_data.name}
                      className={`PDDetailsOtherImg ${item.url===currentImg ? "activeImage" : "passiveImage"}`}
                      onClick={()=>{
                        setCurrentImg(item.url)
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className="PDDetailsInfoView">
              <h1 className="productNameText">{particular_data.name}</h1>
              <p className="manufacturerText">Manufacturer</p>
              <img src="/images/ZRlogo.png" alt="" className="logoImg" />
              <p className="companyNameText">ZR Surgical & Corporation</p>
              <div className="reviewDiv">
                <img
                  src={"/images/ratingStars.svg"}
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
    )
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
