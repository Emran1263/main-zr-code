import React, { useContext, useRef } from "react";
import LikedItemsContext from "../../context/AddToCartContext";
import emailjs from "@emailjs/browser";

function AllInquiryForm() {
  const { likedItems } = useContext(LikedItemsContext);

  const allitemNames = likedItems.map((item) => item.name);
  var combinedString = allitemNames.join(", ");

  const CateNames = likedItems.map(
    (item) =>
      "https://zrsurgicals.com/" +
      item.categories.map((prod) => prod.name).toString() +
      "/" +
      item.id
  );
  var properLikers = CateNames.map((item) => item.replace(/ /g, "%20"));
  var combinedLinks = properLikers.join(", ");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lrrxmzg",
        "template_m64t7ja",
        form.current,
        "DFBQ7s-4UW8wC0SXz"
      )
      .then(
        (result) => {
          alert("Inqiury Sent Successfully");
        },
        (error) => {
          alert("Error");
        }
      );
  };

  return (
    <div className="IFMainDiv">
      <div className="IFFormInputs">
        <form ref={form} onSubmit={sendEmail} className="IFMainForm">
          <div className="IFDoubleInputs">
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">First Name*</p>
                <input className="IFInputField" name="f_name" required />
              </div>
            </div>
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">Last Name*</p>
                <input className="IFInputField" name="l_name" required />
              </div>
            </div>
          </div>
          <div className="IFSingleInputHalf">
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Email</p>
              <input
                className="IFInputField"
                type="email"
                name="user_email"
                required
              />
            </div>
          </div>
          <div className="IFDoubleInputs">
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">Phone No.</p>
                <input
                  className="IFInputField"
                  type="number"
                  name="user_phone"
                  required
                />
              </div>
            </div>
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">Company Name</p>
                <input className="IFInputField" name="c_name" />
              </div>
            </div>
          </div>
          <div className="IFSingleInputFull">
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Address</p>
              <input className="IFInputField" name="user_address" required />
            </div>
          </div>
          <div style={{ display: "none" }}>
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Products Names</p>
              <input
                className="IFInputField"
                onChange={(e) => {
                  e.target.value = combinedString;
                }}
                value={combinedString}
                name="p_name"
              />
            </div>
          </div>
          <div style={{ display: "none" }}>
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Products Links</p>
              <input
                className="IFInputField"
                onChange={(e) => {
                  e.target.value = combinedLinks;
                }}
                value={combinedLinks}
                name="p_link"
              />
            </div>
          </div>
          <div className="IFSingleInputFull">
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Order Details</p>
              <input className="IFInputField" required name="other_details" />
            </div>
          </div>

          <div className="IFSingleInputFull">
            <p className="IFPlaceholder">Custom Message</p>
            <textarea
              id=""
              className="IFInputField_1"
              rows="1"
              name="c_msg"
            ></textarea>
          </div>
          <div className="IPButtonDiv">
            <button
              type="submit"
              style={{ marginTop: "2em" }}
              className="send_inquiry_btn_send_INQUIRY MAIN_BTN"
            >
              Send Inquiry
            </button>

            <a
              target="_blank"
              href="https://wa.me/+923069566970"
              style={{ marginTop: "2em" }}
              className="call_inquiry_btn_CALL_US MAIN_BTN"
            >
              Call Us
            </a>
          </div>
        </form>
      </div>
      <div className="IFHowThingsWork-HTW">
        <h2 className="IFHTWHeading">How things work?</h2>
        <div className="IFStepView">
          <Step
            stepNumber={1}
            stepText={"You give us details of the products you want."}
          />
          <Step
            stepNumber={2}
            stepText={
              "Our team will respond with price quotations & quality promises."
            }
          />
          <Step
            stepNumber={3}
            stepText={
              "We’ll work on the project with by taking time in the mind & quality we always assure."
            }
          />
          <Step
            stepNumber={4}
            stepText={
              "Goods will be delivered in time promised. & payment will be cleared."
            }
          />
        </div>
      </div>
    </div>
  );
}

function Step({ stepNumber, stepText }) {
  return (
    <div className="StepMain">
      <h1 className="StepHeading">Step {stepNumber}</h1>
      <p className="StepText">{stepText}</p>
    </div>
  );
}

export default AllInquiryForm;
