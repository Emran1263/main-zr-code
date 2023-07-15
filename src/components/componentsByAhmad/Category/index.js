import React, { useEffect, useState } from "react";
import "../../../Styles/CategoryPage.css"
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import Spinner from "../Spinner";



// Import the Commerce.js library

  

function Category() {
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
    cate && <div className="width-100 categoryPageMain">
      {loading&& <Spinner/>}
      <div className="res-1440-in-heavy categoryPageSec">
        <div className="mainHeadingDiv">
          <h1 className="mainHeading">Our Categories</h1>
          <div className="headingLine"></div>
        </div>
        <div className="sectionMain">
          <div className="productListView">
            {cate.map((product) => (
              <ProductCardForCate product={product} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Category;




function ProductCardForCate({ product }) {

  const [imageer, setimager] = useState("/images/goToDetails-icon.png")
  const [loading, setLoading] = useState(true)
  return (
    <div className="productCard">
      <div className="productCardImageView">
        <img src={product.assets[0].url} onLoad={() => {
          setLoading(false)
        }} className="productCardImage" />
      </div>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={`/${product.name}`}>
        <div onMouseMove={() => {
          setimager("/images/whitearrow.png")
        }}
          onMouseLeave={() => {

            setimager("/images/goToDetails-icon.png")
          }}
          className="productCardInfoView">
          <p className="productTitle">{product.name}</p>
          <img src={imageer} className="productIcon" />
        </div>
      </Link>
    </div>
  );
}