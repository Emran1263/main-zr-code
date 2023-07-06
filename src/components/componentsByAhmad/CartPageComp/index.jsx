import React, { useContext } from "react";
import CartProduct from "./CartProduct";
import "../../../Styles/CartPage.css";
import LikedItemsContext from "../../context/AddToCartContext";
import { Link } from "react-router-dom";


function CartPageComp() {
  const { likedItems } = useContext(LikedItemsContext);
  return (
    <div className="res-1440-in CPMainDiv">
      <h1 className="CartPageH">Cart</h1>
      <div
        style={{ display: likedItems.length === 0 ? "none" : "block" }}
        className="CPSecDiv"
      >
        {likedItems.map((product) => (
          <CartProduct product={product} />
        ))}
      </div>
      <div
        className="no_item_in_cart"
        style={{ display: likedItems.length === 0 ? "flex" : "none" }}
      >
        <h1 className="no_item_in_cart_h1">Your Cart is Empty</h1>
      </div>
      {likedItems.length !== 0 && (
        <div className="SPSecDiv">
          <div className="CPQuantityAndSendInquiryDiv">
            <span className="span04">
              <p className="CPQuantitySelected">0{likedItems.length}</p>
              <p
                style={{ fontWeight: 300, marginLeft: 10 }}
                className="CPQuantitySelected"
              >
                Items selected, Send inquiry to <br />
                get price quotation now
              </p>
            </span>

            <div className="CPSendAndCallDiv">
              <Link to={`/allinquiry`} className="CartPageSendButton">Send Inquiry</Link>
              <a
                target="_blank"
                href="https://wa.me/+923069566970"
                className="contactUsButton"
              >
                <button className="CartPageCallButton">Call Us</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPageComp;
