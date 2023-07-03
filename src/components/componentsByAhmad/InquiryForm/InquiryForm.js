import React from "react";

function InquiryForm() {
  return (
    <div className="IFMainDiv">
      <div className="IFFormInputs">
        <form className="IFMainForm">
          <div className="IFDoubleInputs">
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">First Name*</p>
                <input className="IFInputField" required />
              </div>
            </div>
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">Last Name*</p>
                <input className="IFInputField" required />
              </div>
            </div>
          </div>
          <div className="IFSingleInputHalf">
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Email</p>
              <input className="IFInputField" type="email" required />
            </div>
          </div>
          <div className="IFDoubleInputs">
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">Phone No.</p>
                <input className="IFInputField" type="number" required />
              </div>
            </div>
            <div className="IFSingleInputHalf">
              <div className="IFInputFieldView">
                <p className="IFPlaceholder">Company Name</p>
                <input className="IFInputField" />
              </div>
            </div>
          </div>
          <div className="IFSingleInputFull">
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Address</p>
              <input className="IFInputField" required />
            </div>
          </div>
          <div className="IFSingleInputFull">
            <div className="IFInputFieldView">
              <p className="IFPlaceholder">Order Details</p>
              <input className="IFInputField" required />
            </div>
          </div>
          <div style={{ display: "none" }} className="displayNone">
            <input type="text" />
          </div>
          <div style={{ display: "none" }} className="displayNone">
            <input type="text" />
          </div>
          <div className="IFSingleInputFull">
            <p className="IFPlaceholder">Custom Message</p>
            <textarea id="" className="IFInputField_1" rows="1"></textarea>
          </div>
          <div className="IPButtonDiv">
            <button
              type="submit"
              style={{ marginTop: "2em" }}
              className="send_inquiry_btn_send_INQUIRY MAIN_BTN"
            >
              Send Inquiry
            </button>
            <button
              type="submit"
              style={{ marginTop: "2em" }}
              className="call_inquiry_btn_CALL_US MAIN_BTN"
            >
              Call Us
            </button>
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
