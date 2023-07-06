import React, { useEffect, useState } from "react";
import ProductDescSpecs from "./ProductDescSpecs";
import ProductDisplayDetails from "./ProductDisplayDetails";
import MoreProducts from "../ProductFromCategory/MoreProducts";
import "../../../Styles/ProductDetailsPage.css";
import { commerce } from "../../lib/commerce";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner";



function ProductDetails() {

  const [loading, setLoading] = useState(true)


  const { cata, prodId } = useParams()
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 200,
    });
    setProducts(data);
    setLoading(false);
  };


  const filteredProducts = products.filter(
    (item) => item.categories.map((prod) => prod.name).toString() === cata
  );

  const particular_data = products.find((prod) => prod.id === prodId);

  const limitedProducts = filteredProducts.slice(0, 4);



  useEffect(() => {
    fetchProducts();
  }, []);




  return (

    <div className="width-100">
        {loading && <Spinner />}

      {particular_data && <div className="width-100 ProductDetailsPageMain">
        {() => {
          document.title = particular_data.name + " | ZR Surgicals"
        }}
        <ProductDisplayDetails particular_data={particular_data} prodId={prodId} cata={cata} />
        <ProductDescSpecs particular_data={particular_data} />
        <MoreProducts limitedProducts={limitedProducts} cata={cata} />
      </div>}
    </div>
  );
}

export default ProductDetails;
