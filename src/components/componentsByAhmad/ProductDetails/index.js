import React, { useContext, useEffect, useState } from "react";
import ProductDescSpecs from "./ProductDescSpecs";
import ProductDisplayDetails from "./ProductDisplayDetails";
import MoreProducts from "../ProductFromCategory/MoreProducts";
import "../../../Styles/ProductDetailsPage.css";
import { commerce } from "../../lib/commerce";
import { useParams } from "react-router-dom";



function ProductDetails() {


  const {cata,prodId} = useParams()
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 200,
    });
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const particular_data =  products.find((prod) => prod.id === prodId);
  

  
  
  
  
  return (


    particular_data && <div className="width-100 ProductDetailsPageMain">
      <ProductDisplayDetails particular_data={particular_data} />
      <ProductDescSpecs particular_data={particular_data} />
      <MoreProducts />
    </div>
  );
}

export default ProductDetails;
