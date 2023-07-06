import React, { useContext, useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";
import LikedItemsContext from "../../context/AddToCartContext";
import Spinner from "../Spinner";

function ProductDisplayDetails({ particular_data, cata, prodId }) {
  const [ImagesAssets, setImageAssets] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentImg, setCurrentImg] = useState();
  const { AddFromCart } = useContext(LikedItemsContext);
  useEffect(() => {
    setLoading(true)
    const getallimages = async () => {
      try {
        const product = await commerce.products.retrieve(particular_data.id);
        const assets = product.assets;
        setImageAssets(assets);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    getallimages();
    setCurrentImg(particular_data.image.url);
    setLoading(false)
  }, [prodId]);

  return (
    particular_data && (
      <div className="PDDetailsMainCnt">
        {loading && <Spinner/>}
        <div className="res-1440-40">
          <div className="PDDetailsMainDiv">
            <div className="PDDetailsImageView">
              <div className="PDDetailsOtherImgView">
                {ImagesAssets.map((item, index) => {
                  return (
                    ImagesAssets.length > 0 && (
                      <img
                        key={index}
                        src={item.url}
                        alt={particular_data.name}
                        className={`PDDetailsOtherImg ${
                          item.url === currentImg
                            ? "activeImage"
                            : "passiveImage"
                        }`}
                        onClick={() => {
                          setCurrentImg(item.url);
                        }}
                      />
                    )
                  );
                })}
              </div>
              <img src={currentImg} alt="" className="PDDetailsMainImg" />
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
              <a href={particular_data.thank_you_url} className="moreSpecsText">
                More Specifications
              </a>
              <div className="PDDetailsAssuranceDiv">
                <div className="assuranceImgView">
                  <img
                    src="/images/specImg1.svg"
                    alt=""
                    className="assuranceImg"
                  />
                  <img
                    src="/images/specImg2.svg"
                    alt=""
                    className="assuranceImg"
                  />
                  <img
                    src="/images/specImg3.svg"
                    alt=""
                    className="assuranceImg"
                  />
                  <img
                    src="/images/specImg4.svg"
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
                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                    AddFromCart(particular_data);
                  }}
                  className="addToCartButton"
                >
                  Add To Cart
                </button>
                <div className="PDDetailsContactDiv">
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to={`/inquiry/${cata}/${prodId}`}
                    className="sendInquiryButton"
                  >
                    Send Inquiry
                  </Link>
                  <div className="contactUsDiv">
                    <a
                      target="_blank"
                      href="https://wa.me/+923069566970"
                      className="contactUsButton"
                    >
                      Contact Via WhatsApp
                    </a>
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
