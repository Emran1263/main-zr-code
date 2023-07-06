import React, { useContext, useEffect, useState } from "react";
import "../../Styles/Footer.css";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AllProductsContext";

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
      <BarAtBottom />
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
  const [reviewsNumber, setReviewNumber] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Code to be executed repeatedly

      if (reviewsNumber < 5) {
        setReviewNumber(reviewsNumber + 1);
      } else {
        setReviewNumber(1);
      }
    }, 3000); // 1000 milliseconds = 1 second
    return () => {
      clearInterval(intervalId);
    };

    // Clean up the interval when the component unmounts
  }, [reviewsNumber]);
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
          <div
            className="ClientsReviewsContentReviewsR R_1"
            style={{ left: reviewsNumber === 1 ? "0px" : "-110%" }}
          >
            <p className="ClientsReviewsContentReviewsRPara">
              "I am extremely impressed with the medical equipment produced by
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
          <div
            className="ClientsReviewsContentReviewsR R_2"
            style={{ left: reviewsNumber === 2 ? "0px" : "-110%" }}
          >
            <p className="ClientsReviewsContentReviewsRPara">
              "Working with this company has been a pleasure. Their team was
              attentive to our needs and provided excellent customer service
              throughout the entire process. The medical equipment they
              manufactured for us has exceeded our expectations in terms of
              functionality and durability. We are grateful for their expertise
              and commitment to delivering top-notch products."
            </p>
            <h3 className="ClientsReviewsContentReviewsRWriter">
              - Mark Johnson, Hospital Administrator
            </h3>
          </div>
          <div
            className="ClientsReviewsContentReviewsR R_3"
            style={{ left: reviewsNumber === 3 ? "0px" : "-110%" }}
          >
            <p className="ClientsReviewsContentReviewsRPara">
              "We have been using the medical equipment manufactured by this
              company for several years now, and we couldn't be happier with the
              results. Their equipment has helped streamline our workflow and
              enhance the accuracy of diagnoses. It is evident that they
              prioritize innovation and incorporate the latest technological
              advancements into their products. Their dedication to quality is
              truly commendable."
            </p>
            <h3 className="ClientsReviewsContentReviewsRWriter">
              - Dr. Emily Rodriguez, Radiologist
            </h3>
          </div>
          <div
            className="ClientsReviewsContentReviewsR R_4"
            style={{ left: reviewsNumber === 4 ? "0px" : "-110%" }}
          >
            <p className="ClientsReviewsContentReviewsRPara">
              "As a healthcare provider, I am always on the lookout for reliable
              and efficient medical equipment. This company has consistently
              delivered products that meet and exceed my expectations. Their
              equipment is user-friendly, robust, and performs exceptionally
              well in demanding clinical environments. I have complete
              confidence in their products, and I would highly recommend them to
              anyone in the healthcare industry."
            </p>
            <h3 className="ClientsReviewsContentReviewsRWriter">
              - Dr. Michael Carter, Cardiologist
            </h3>
          </div>
          <div
            className="ClientsReviewsContentReviewsR R_5"
            style={{ left: reviewsNumber === 5 ? "0px" : "-110%" }}
          >
            <p className="ClientsReviewsContentReviewsRPara">
              "The medical equipment produced by this company has revolutionized
              our operating rooms. The precision and reliability of their
              products have significantly improved surgical outcomes. The
              company's commitment to safety and innovation is evident in every
              aspect of their equipment. We are grateful to have partnered with
              them and look forward to future collaborations."
            </p>
            <h3 className="ClientsReviewsContentReviewsRWriter">
              - Linda Davis, Head Nurse, Surgical Department
            </h3>
          </div>
        </div>
        <div className="ClientsReviewsContentBars">
          <span
            style={{
              backgroundColor: reviewsNumber === 1 ? "#2a6280" : "#cecece",
            }}
            onClick={() => {
              setReviewNumber(1);
            }}
            className="ClientsReviewsContentBar"
          ></span>
          <span
            style={{
              backgroundColor: reviewsNumber === 2 ? "#2a6280" : "#cecece",
            }}
            onClick={() => {
              setReviewNumber(2);
            }}
            className="ClientsReviewsContentBar"
          ></span>
          <span
            style={{
              backgroundColor: reviewsNumber === 3 ? "#2a6280" : "#cecece",
            }}
            onClick={() => {
              setReviewNumber(3);
            }}
            className="ClientsReviewsContentBar"
          ></span>
          <span
            style={{
              backgroundColor: reviewsNumber === 4 ? "#2a6280" : "#cecece",
            }}
            onClick={() => {
              setReviewNumber(4);
            }}
            className="ClientsReviewsContentBar"
          ></span>
          <span
            style={{
              backgroundColor: reviewsNumber === 5 ? "#2a6280" : "#cecece",
            }}
            onClick={() => {
              setReviewNumber(5);
            }}
            className="ClientsReviewsContentBar"
          ></span>
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
  const [searchText, setSearchText] = useState("");
  const data = useContext(AppContext);

  const Categories = [
    "Imaging Devices",
    "Cardiovascular Devices",
    "Respiratory Devices",
    "Orthopedic Devices",
    "Dental Devices",
    "Surgical Devices",
    "Life Care Equipment",
    "Rehabilitation Devices",
    "Home Care Equipment",
    "Laboratory Equipment",
    "Hollowares",
    "Plastic Holloware",
  ];
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
            {Categories.map((product, index) => {
              return (
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to={`/${product}`}
                  key={index}
                  className="MainFooterContentCataLinks"
                >
                  {product}
                </Link>
              );
            })}
          </div>
          <div className="MainFooterContentCataDiv">
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
            
            <iframe
              className="MapWALA"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d471.7575570269424!2d74.5439183983102!3d32.57137186025293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1688410345722!5m2!1sen!2s"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
        <p className="BarAtBottomContentP">
          Designed by <a href="https://www.instagram.com/agaaz.01/?igshid=Y2IzZGU1MTFhOQ==" className="fw-500">Agaaz</a>, Developed by{" "}
          <a href="https://www.instagram.com/ravalbit/?igshid=Y2IzZGU1MTFhOQ%3D%3D" className="fw-500">RavalBit</a>.
        </p>
        <p className="BarAtBottomContentP">
          Copyright © 2022-23, ZR Surgical, All Rights Reserved
        </p>
      </div>
    </div>
  );
};
