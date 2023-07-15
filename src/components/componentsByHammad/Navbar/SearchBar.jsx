import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AllProductsContext";
import "../../../Styles/Navbar.css";
import LikedItemsContext from "../../context/AddToCartContext";
import { commerce } from "../../lib/commerce";
import Spinner from "../../componentsByAhmad/Spinner";


export default function SearchBar() {
  const { likedItems } = useContext(LikedItemsContext);
  const data = useContext(AppContext);
  const [searchText, setSearchText] = useState("")
   
  const Categories = [
    "Imaging Devices",
    "Cardiovascular Devices",
    "Respiratory Devices",
    "Orthopedic Devices",
    "Dental Devices",
    "Surgical Devices",
    "Patient Monitoring Devices",
    "Rehabilitation Devices",
    "Home Care Equipment",
    "Laboratory Equipment",
    "Hollowares",
    "Medical Holloware",
  ];
  const [cate, setCate] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const { data } = await commerce.categories.list({
      limit: 500,
    });
    setCate(data);
    setLoading(false)
  };


 

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    cate&&<div className="width-100 SearchBarCnt">
      {loading && <Spinner/>}
      <div className="res-1440-10 SearchBarContent">
        <div className="SearchBarContentBtnSearch">
          <div className="SearchBarContentDropDown">
            <button className="SearchBarContentDropDownBtn">
              Browse by catagory
            </button>
            <div className="SearchBarContentDropDownContent">
              {cate.map((category, index) => {
                return (
                  <Link to={`/${category.name}`} key={index} className="category_drop_down_a" href="">
                    {category.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="SearchBarContentInputFeildDiv">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="What you’re looking for"
              type="text"
              className="SearchBarContentInputFeild"
            />
            <div
              className="SearchBarContentDropDownContent_re"
              style={{ display: searchText ? "block" : "none" }}
            >
              {data.map((item) => {
                return (
                  searchText !== "" &&
                  item.name.toLowerCase().includes(searchText.toLowerCase()) && (
                    <Link
                      onClick={() => {
                        setSearchText("");
                      }}
                      className="category_drop_down_a"
                      to={`/${item.categories
                        .map((prod) => prod.name)
                        .toString()}/${item.id}`}
                    >
                      {item.name}
                    </Link>
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className="SearchBarContentCallCart">
          <Link to={"/cart"}>
          <div className="p-r rennn">
            {likedItems.length&&<span className="red_dot_as"></span>}
          <img
            src="/images/cart.png"
            alt=""
            className="SearchBarCntCallimg border_both_img"
          />
          </div>
          </Link>
          
          <div className="SearchBarCntCallDiv">
            <img
              src="/images/call.png"
              alt=""
              className="SearchBarCntCallimg"
            />
            <a href="tel:+923069566970" className="SearchBarCntCallPara">Call us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
