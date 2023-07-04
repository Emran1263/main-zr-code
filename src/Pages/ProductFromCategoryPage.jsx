import React, { useContext, useEffect, useState } from "react";
import ProductFromCategory from "../components/componentsByAhmad/ProductFromCategory";
import MoreProducts from "../components/componentsByAhmad/ProductFromCategory/MoreProducts";
import Header from "../components/componentsByHammad/Navbar/Header";
import SearchBar from "../components/componentsByHammad/Navbar/SearchBar";
import { useParams } from "react-router-dom";
import { commerce } from "../components/lib/commerce";


function ProductFromCategoryPage() {
  const {cata} = useParams()
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

  const filteredProducts = products.filter(
    (item) => item.categories.map((prod) => prod.name).toString() === cata
  );

  console.log(cata);
  return (
    filteredProducts !== [] && (
      <div className="width-100">
        <Header />
        <SearchBar />
        <ProductFromCategory filteredProducts={filteredProducts} cata={cata}/>
        <MoreProducts />
      </div>
    )
  );
}

export default ProductFromCategoryPage;
