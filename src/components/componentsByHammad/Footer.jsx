import React from "react";
import "../../Styles/Footer.css";

export default function Footer() {
  return (
    <div className="width-100">
      <div className="newsLetterBarCnt width-100">
        <div className="res-1440-40 newsLetterBarContent">
          <div className="newsLetterHeadingImage">
            <img
              className="newsLetterImage"
              src="/images/newsletter.png"
              alt="ZR surgicals NewsLetter"
            />
            <h1 className="newsLetterHeading">Newsletter Subscription</h1>
          </div>
          <form className="newLetterInputFeilds">
            <input
              style={{
                borderRadius: "50px",
                marginRight: "10px",
              }}
              type="text"
              placeholder="Your Name"
              className="newLetterInputFeildINP"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="newLetterInputFeildINP mt-10 responsiveINP"
            />
            <button type="submit" className="newLetterInputFeildSubmit mt-10">
              <img
                src="/images/sendbtn.png"
                className="newLetterInputFeildSubmitImg"
              />
            </button>
          </form>
        </div>
      </div>
      <QualityPolicy />
      <ClientsReviews />
      <FAQ />
      <MainFooter />
      <BarAtBottom/>
    </div>
  );
}

const QualityPolicy = () => {
  return (
    <div className="QualityPolicyCnt width-100">
      <div className="res-1440-40 QualityPolicyContent">
        <div className="QualityPolicyHeading">
          <h1 className="QualityPolicyHeadingh1">Quality Policy</h1>
        </div>
        <div className="QualityPolicyPara">
          <p className="QualityPolicyParaP">
            We believe in providing quality of highest level. The fact that we
            are in a business which is directly linked to the health and well
            being of the people makes us more responsible company, and no matter
            what, no compromises are made. No doubt, life is precious.
          </p>
        </div>
        <div className="QualityPolicyImages">
          <span className="QualityPolicyImagesSpan">
            <img
              className="QualityPolicyImagesSpanImg"
              src="/images/image2.png"
              alt=""
            />
            <p className="QualityPolicyImagesSpanImgText">On time delivery</p>
          </span>
          <span className="QualityPolicyImagesSpan">
            <img
              className="QualityPolicyImagesSpanImg"
              src="/images/image1.png"
              alt=""
            />
            <p className="QualityPolicyImagesSpanImgText">
              Certified Materials
            </p>
          </span>
          <span className="QualityPolicyImagesSpan">
            <img
              className="QualityPolicyImagesSpanImg"
              src="/images/image3.png"
              alt=""
            />
            <p className="QualityPolicyImagesSpanImgText">
              Quality <br /> Checks
            </p>
          </span>
          <span className="QualityPolicyImagesSpan">
            <img
              className="QualityPolicyImagesSpanImg"
              src="/images/image4.png"
              alt=""
            />
            <p className="QualityPolicyImagesSpanImgText">
              After Sales <br />
              Customer Service
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

const ClientsReviews = () => {
  return (
    <div className="width-100 ClientsReviewsCnt">
      <div className="res-1440-40 ClientsReviewsContent">
        <h1 className="ClientsReviewsContenth1">Clients Reviews</h1>
        <img
          src="/images/logoZR.png"
          alt="Logo ZR surgicals"
          className="ClientsReviewsContentImg"
        />
        <div className="ClientsReviewsContentReviews">
          <div className="ClientsReviewsContentReviewsR">
            <p className="ClientsReviewsContentReviewsRPara">
              “I am extremely impressed with the medical equipment produced by
              this company. The quality of their products is exceptional, and
              they have greatly improved the efficiency of our healthcare
              facility. The equipment is reliable, user-friendly, and has
              significantly contributed to better patient outcomes. I highly
              recommend their products."
            </p>
            <h3 className="ClientsReviewsContentReviewsRWriter">
              - Dr. Sarah Thompson, Chief Medical Officer
            </h3>
          </div>
        </div>
        <div className="ClientsReviewsContentBars">
          <span className="ClientsReviewsContentBar"></span>
          <span className="ClientsReviewsContentBar"></span>
          <span className="ClientsReviewsContentBar"></span>
          <span className="ClientsReviewsContentBar"></span>
          <span className="ClientsReviewsContentBar"></span>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="FAQCnt width-100">
      <div className="res-1440-40 FAQContent">
        <h1 className="FAQContenth1">FAQ</h1>
        <div className="FAQContentQuestions">
          <div className="FAQContentHrBar"></div>
          <div className="FAQContentQuestionsAnswer">
            <h3 className="FAQContentQuestionsQues">
              What types of medical equipment does your company <br />{" "}
              manufacture?
            </h3>
            <p className="FAQContentQuestionsAns">
              Our company specializes in manufacturing a wide range of medical
              equipment, including diagnostic devices such as MRI machines,
              ultrasound systems, and X-ray machines. We also produce surgical
              equipment like operating tables, surgical lights, and anesthesia
              machines. In addition, we provide patient monitoring systems,
              laboratory equipment, and other essential medical devices.
            </p>
          </div>
          <div className="FAQContentHrBar"></div>

          <div className="FAQContentQuestionsAnswer">
            <h3 className="FAQContentQuestionsQues">
              Are your medical equipment products certified and <br /> compliant
              with industry standards?
            </h3>
            <p className="FAQContentQuestionsAns">
              Yes, absolutely. We prioritize quality and compliance in our
              manufacturing process. All our medical equipment products are
              designed, developed, and manufactured following strict adherence
              to relevant industry standards and regulations. Additionally, our
              products undergo rigorous testing and certification processes to
              ensure they meet or exceed the required quality and safety
              standards.
            </p>
          </div>
          <div className="FAQContentHrBar"></div>

          <div className="FAQContentQuestionsAnswer">
            <h3 className="FAQContentQuestionsQues">
              How can I request a demonstration or get more <br /> information
              about your medical equipment?
            </h3>
            <p className="FAQContentQuestionsAns">
              We encourage you to reach out to our sales team to request a
              demonstration or gather more information about our medical
              equipment. You can contact our sales department through the phone
              number or email provided on our website. Our dedicated sales
              representatives will be happy to assist you, provide detailed
              product information, and arrange a demonstration based on your
              requirements.
            </p>
          </div>
          <div className="FAQContentHrBar"></div>

          <div className="FAQContentQuestionsAnswer">
            <h3 className="FAQContentQuestionsQues">
              Do you offer after-sales support and maintenance <br /> services
              for your medical equipment?
            </h3>
            <p className="FAQContentQuestionsAns">
              Yes, we have a dedicated customer support team that provides
              comprehensive after-sales support and maintenance services. Our
              team is available to address any technical issues, provide
              troubleshooting assistance, and offer preventive maintenance to
              ensure optimal performance of our medical equipment. We also offer
              service contracts and warranties to further support our customers'
              needs.
            </p>
          </div>
          <div className="FAQContentHrBar"></div>

          <div className="FAQContentQuestionsAnswer">
            <h3 className="FAQContentQuestionsQues">
              Can your company customize medical equipment to suit <br />{" "}
              specific requirements?
            </h3>
            <p className="FAQContentQuestionsAns">
              Absolutely! We understand that different healthcare facilities may
              have unique needs and preferences. Therefore, we offer
              customization options for our medical equipment. Our engineering
              team works closely with customers to understand their specific
              requirements and develop tailored solutions accordingly. Whether
              it's customizing features, dimensions, or interfaces, we strive to
              meet our customers' expectations and provide equipment that aligns
              with their operational needs.
            </p>
          </div>
          <div className="FAQContentHrBar"></div>
        </div>
      </div>
    </div>
  );
};

const MainFooter = () => {
  return (
    <div className="width-100 MainFooterCnt">
      <div className="MainFooterContent res-1440-40">
        <div className="MainFooterContentLogoAbout">
          <div className="MainFooterContentLogoAboutDiv">
            <img
              src="/images/ZRlogo.png"
              alt="ZR Surgicals Logo"
              className="MainFooterContentLogoImg"
            />
            <h1 className="MainFooterContentHeadingH">
              ZR Surgical & Corporation
            </h1>
          </div>
          <p className="MainFooterContentParaP">
            Thank you for your interest in our products and services. If you
            have any questions or comments, please don't hesitate to contact us.
            Our customer service team is available to assist you in any way
            possible.
          </p>
          <div className="MainFooterContentContact">
            <h2 className="MainFooterContentContactH">Contact</h2>
            <div className="MainFooterContentContactContact">
              <img
                className="MainFooterContentContactContactImg"
                src="/images/mail.png"
                alt="Contact Us | Email"
              />
              <p className="MainFooterContentContactContactParaP">
                info@zrsurgicals.com
              </p>
            </div>
            <div className="MainFooterContentContactContact">
              <img
                className="MainFooterContentContactContactImg"
                src="/images/phone.png"
                alt="Contact Us | Email"
              />
              <p className="MainFooterContentContactContactParaP">
                +92 343 6323250 / +92 306 9566970
              </p>
            </div>
            <div className="MainFooterContentContactContact">
              <img
                className="MainFooterContentContactContactImg"
                src="/images/address.png"
                alt="Contact Us | Email"
              />
              <p className="MainFooterContentContactContactParaP">
                Defense Road, Near Coke Agency, Str Tahiri School Foundation,
                Akbarabad 51310-Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="MainFooterContentCataCredit">
          <div className="MainFooterContentCataDiv">
            <h2 className="MainFooterContentCataHeadingH">Categories</h2>
            <p className="MainFooterContentCataLinks">Imaging Devices</p>
            <p className="MainFooterContentCataLinks">Cardiovascular Devices</p>
            <p className="MainFooterContentCataLinks">Respiratory Devices</p>
            <p className="MainFooterContentCataLinks">Orthopedic Devices</p>
            <p className="MainFooterContentCataLinks">Dental Devices</p>
            <p className="MainFooterContentCataLinks">Surgical Devices</p>
            <p className="MainFooterContentCataLinks">Life Care Equipment</p>
            <p className="MainFooterContentCataLinks">Rehabilitation Devices</p>
            <p className="MainFooterContentCataLinks">Home Care Equipment</p>
            <p className="MainFooterContentCataLinks">
              Emergency Care Equipment
            </p>
          </div>
          <div className="MainFooterContentCataDiv">
            <p className="MainFooterContentCataLinks">Laboratory Equipment</p>
            <p className="MainFooterContentCataLinks">Hollowares</p>
            <p className="MainFooterContentCataLinks">Plastic Holloware</p>
            <h2 className="MainFooterContentCataHeadingH">Credits</h2>
            <p className="MainFooterContentCataLinks">Freepik</p>
            <p className="MainFooterContentCataLinks">Figma</p>
            <p className="MainFooterContentCataLinks">Photos: Google</p>
          </div>
        </div>
        <div className="MainFooterContentSearchLocation">
          <img
            src="/images/logoZR.png"
            alt="Surgicals Products by ZR"
            className="MainFooterContentSearchLocationImg"
          />
          <div className="MainFooterContentSearchLocationInputDiv">
            <img
              src="/images/search.png"
              alt="Search Image"
              className="MainFooterContentSearchLocationSearchImg"
            />
            <input
              placeholder="Search Any Product"
              type="text"
              className="MainFooterContentSearchLocationInput"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const BarAtBottom = () => {
  return (
    <div className="width-100 BarAtBottomCnt">
      <div className="BarAtBottomContent res-1440-40">
        <p className="BarAtBottomContentP">www.zrsurgicals.com</p>
        <p className="BarAtBottomContentP">Designed by <span className="fw-500">Agaaz</span>, Developed by <span className="fw-500">RavalBit</span>.</p>
        <p className="BarAtBottomContentP">Copyright © 2022-23, ZR Surgical, All Rights Reserved</p>
      </div>
    </div>
  );
};
