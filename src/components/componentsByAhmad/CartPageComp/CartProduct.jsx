import React from "react";
import "../../../Styles/CartPage.css";
function CartProduct({ product }) {
  return (
    <div className="CartProductMainDiv">
      <div className="CartProductImgView">
        <img src={product.image} alt="" className="CartProductImg" />
      </div>
      <div className="CartProductInfoView">
        <h2 className="CartProductH">{product.name}</h2>
        <p className="CartProductComitmentP">
          Furthermore, we are committed to providing exceptional customer
          service. Our knowledgeable and responsive team is readily available to
          answer any questions, provide technical support, and assist with any
          concerns or inquiries you may have. We believe in establishing strong
          relationships with our clients, and we strive to exceed expectations
          at every step of the journey.
        </p>
        <div className="CartProductReviewAndSpecs">
          <button className="CartProductMoreSpecsButton">
            More Specifications
          </button>
          <div className="CartProductReviewDiv">
            <img
              src="/images/ratingStars.svg"
              alt=""
              className="CartProductStars"
            />
            <p className="CartProductReviewText">125+ reviews</p>
          </div>
        </div>
      </div>
      <div className="CartProductSelectionView">
        <img
          src="/images/crossIcon.svg"
          alt=""
          className="CartProductCrossIcon"
        />
        <p className="CartProductQuantityText">Quantity</p>
        <div className="CartProductSelectQuantityDiv">
          <button className="CartProductSetQuantity">-</button>
          <p className="CartProductQuantityTextN">1</p>
          <button className="CartProductSetQuantity">+</button>
        </div>
        <p className="CartProductInquirySendText">
          Inquiry will be send of the products you choose & quantity
        </p>
      </div>
    </div>
  );
}

export default CartProduct;
