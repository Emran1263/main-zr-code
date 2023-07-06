import React, { useState } from "react";
import "../../../Styles/CategoryPage.css";
import { Link } from "react-router-dom";

function MoreProducts({ limitedProducts, cata }) {
  return (
    <div className="width-100 categoryPageMain">
      <div className="res-1440-in-heavy">
        <div className="categoryPageSec">
          <div className="productFromCategorySec">
            <div className="moreFromCategoryHeaderView">
              <h1 className="moreFromCategoryH">
                More products from other categories
              </h1>
            </div>
            <div className="productListView">
              {limitedProducts.map((product, index) => (
                <ProductCardMore key={index} product={product} cata={cata} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreProducts;

function ProductCardMore({ product, cata }) {
  const [imageer, setimager] = useState("/images/goToDetails-icon.png");
  return (
    <div className="productCard">
      <div className="productCardImageView">
        <img src={product.image.url} className="productCardImage" />
      </div>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        to={`/${cata}/${product.id}`}
      >
        <div
          onMouseMove={() => {
            setimager("/images/whitearrow.png");
          }}
          onMouseLeave={() => {
            setimager("/images/goToDetails-icon.png");
          }}
          className="productCardInfoView"
        >
          <p className="productTitle">{product.name}</p>
          <img src={imageer} className="productIcon" />
        </div>
      </Link>
    </div>
  );
}
