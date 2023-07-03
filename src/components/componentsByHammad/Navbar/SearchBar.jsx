import React from "react";

export default function SearchBar() {
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
    <div className="width-100 SearchBarCnt">
      <div className="res-1440-40 SearchBarContent">
        <div className="SearchBarContentBtnSearch">
          <div className="SearchBarContentDropDown">
            <button className="SearchBarContentDropDownBtn">
              Browse by catagory
            </button>
            <div className="SearchBarContentDropDownContent">
              {Categories.map((category, index) => {
                return (
                  <a key={index} className="category_drop_down_a" href="">
                    {category}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="SearchBarContentInputDiv">
            <input
              placeholder="What you’re looking for"
              type="text"
              className="SearchBarContentInputFeild"
            />
          </div>
        </div>
        <div className="SearchBarContentCallCart">
          <img src="/images/cart.png" alt="" className="SearchBarCntCart" />
          <div className="SearchBarCntCallDiv">
            <img
              src="/images/call.png"
              alt=""
              className="SearchBarCntCallimg"
            />
            <p className="SearchBarCntCallPara">Call us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
