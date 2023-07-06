import React, { useContext } from "react";
import "../../../Styles/CartPage.css";
import LikedItemsContext from "../../context/AddToCartContext";

function CartProduct({ product }) {

  const { removeFromCart } = useContext(LikedItemsContext);



  return (
    <div className="CartProductMainDiv">
      <div className="CartProductImgView">
        <img src={product.image.url} alt="" className="CartProductImg" />
      </div>
      <div className="CartProductInfoView">
        <h2 className="CartProductH">{product.name}</h2>
        <p
          className="CartProductComitmentP"
          dangerouslySetInnerHTML={{
            __html: product.description.slice(0, 200),
          }}
        />
        <div className="CartProductReviewAndSpecs">
          <a href="" className="CartProductMoreSpecsButton">
            More Specifications
          </a>
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
      <img
        src="/images/crossIcon.svg"
        alt=""
        className="CartProductCrossIcon"
        onClick={()=>{
          removeFromCart(product.id)
        }}
      />
    </div>
  );
}

export default CartProduct;
