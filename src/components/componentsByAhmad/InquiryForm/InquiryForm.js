import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useParams } from "react-router-dom";
import { commerce } from "../../lib/commerce";
function InquiryForm() {

  const {cata, prodId} = useParams()
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 100,
    });
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const particular_data = products.find((prod) => prod.id === prodId);

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
    particular_data && <div className="IFMainDiv">
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
                <input className="IFInputField" name="l_name"  required />
              </div>
            </div>
          </div>
          <div className="IFSingleInputHalf">
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Email</p>
              <input className="IFInputField" type="email" name="user_email" required />
            </div>
          </div>
          <div className="IFDoubleInputs">
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">Phone No.</p>
                <input className="IFInputField" type="number" name="user_phone" required />
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
                  e.target.value = particular_data.name;
                }}
                value={particular_data.name}
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
                  e.target.value = `https://zrsurgicals.com/${cata}/${prodId}`;
                }}
                value={`https://zrsurgicals.com/${cata}/${prodId}`}
                name="p_link"
              />
            </div>
          </div>
          <div className="IFSingleInputFull">
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Order Details</p>
              <input className="IFInputField" name="other_details" required />
            </div>
          </div>
          
          <div className="IFSingleInputFull">
            <p className="IFPlaceholder">Custom Message</p>
            <textarea id="" className="IFInputField_1" rows="1" name="c_msg"></textarea>
          </div>
          <div className="IPButtonDiv">
            <button
              type="submit"
              style={{ marginTop: "2em" }}
              className="send_inquiry_btn_send_INQUIRY MAIN_BTN"
            >
              Send Inquiry
            </button>

            <a target="_blank"
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

export default InquiryForm;
