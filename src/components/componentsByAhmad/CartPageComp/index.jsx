import React from "react";
import CartProduct from "./CartProduct";
import "../../../Styles/CartPage.css";

const products = [
  {
    id: 1,
    name: "Artificial joint",
    image: "./images/details/artificialJoint.png",
  },
  {
    id: 2,
    name: "Artificial joint",
    image: "./images/details/artificialJoint.png",
  },
  {
    id: 3,
    name: "Artificial joint",
    image: "./images/details/artificialJoint.png",
  },
  {
    id: 4,
    name: "Artificial joint",
    image: "./images/details/artificialJoint.png",
  },
];
function CartPageComp() {
  return (
    <div className="res-1440-in CPMainDiv">
      <h1 className="CartPageH">Cart</h1>
      <div className="res-1440-40 CPSecDiv">
        {products.map((product) => (
          <CartProduct product={product} />
        ))}
      </div>
      <div className="res-1440-in SPSecDiv">
        <div className="CPQuantityAndSendInquiryDiv">
          <span
            style={{
              display: "inline-flex",
              width: "48%",
            }}
          >
            <p className="CPQuantitySelected">04</p>
            <p
              style={{ fontWeight: 300, marginLeft: 10 }}
              className="CPQuantitySelected"
            >
              Items selected, Send inquiry to <br />
              get price quotation now
            </p>
          </span>

          <div className="CPSendAndCallDiv">
            <button className="CartPageSendButton">Send Inquiry</button>
            <button className="CartPageCallButton">Call Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPageComp;
