/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function ContactUs() {
  return (
    <div className="ContactUsMain">
      <h1 className="ContactPageH">Contact us</h1>
      <p className="ContactPageText">
        Thank you for your interest in our products and services. If you have
        any questions or comments, please don't hesitate to contact us. Our
        customer service team is available to assist you in any way possible.
      </p>
      <div className="ContactPageSocialMediaDiv">
        <div className="ContactPageSocialMediaLink">
          <img src="/images/mail.svg" alt="" className="CPSMLinkImage" />
          <p className="CPSMLinkText">info@zrsurgicals.com</p>
        </div>
        <div className="ContactPageSocialMediaLink">
          <img src="/images/phone.png" alt="" className="CPSMLinkImage" />
          <p className="CPSMLinkText">+92-343-6323250 / +92-306-9566970</p>
        </div>
        <div className="ContactPageSocialMediaLink">
          <img src="/images/disc.png" alt="" className="CPSMLinkImage" />
          <p className="CPSMLinkText">
            Defense Road, Near Coke Agency, Str Tahiri
            <br /> School Foundation, Akbarabad 51310-Pakistan
          </p>
        </div>
      </div>
      <h1 className="ContactPageH">Social Media Accounts</h1>
      <div className="ContactPageSocialLinksDiv">
        <a href="" className="ContactPageSocialMediaHyperLink">
          <img
            src="/images/instagram.svg"
            alt=""
            className="ContactPageSocialMediaHyperLinkImg"
          />
        </a>
        <a href="" className="ContactPageSocialMediaHyperLink">
          <img
            src="/images/facebook-logo-2019.svg"
            alt=""
            className="ContactPageSocialMediaHyperLinkImg"
          />
        </a>
        <a href="" className="ContactPageSocialMediaHyperLink">
          <img
            src="/images/twitter.svg"
            alt=""
            className="ContactPageSocialMediaHyperLinkImg"
          />
        </a>
        <a href="" className="ContactPageSocialMediaHyperLink">
          <img
            src="/images/logoZR.png"
            alt=""
            className="ContactPageSocialMediaHyperLinkImg"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
