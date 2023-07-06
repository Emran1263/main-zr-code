import React, {useEffect, useState } from "react";
import ProductFromCategory from "../components/componentsByAhmad/ProductFromCategory";
import Header from "../components/componentsByHammad/Navbar/Header";
import SearchBar from "../components/componentsByHammad/Navbar/SearchBar";
import { useParams } from "react-router-dom";
import { commerce } from "../components/lib/commerce";
import CategoryPage from "./CategoryPage";
import Spinner from "../components/componentsByAhmad/Spinner";

function ProductFromCategoryPage() {
  const {cata} = useParams()
  const [products, setProducts] = useState([])
  const [loading, setloading]= useState(true)

  const fetchProducts = async () => {
    const { data } = await commerce.products.list({
      limit: 200,
    });
    setProducts(data);
    setloading(false)
  };


  useEffect(() => {
    fetchProducts();
    document.title = cata +" | ZR Surgicals";
    

  }, []);

  const filteredProducts = products.filter(
    (item) => item.categories.map((prod) => prod.name).toString() === cata
  );

  console.log(cata);
  return (
    filteredProducts && (
      <div className="width-100" style={{marginTop:"4em"}}>
        {loading && <Spinner/>}
        <Header />
        <SearchBar />
        <ProductFromCategory filteredProducts={filteredProducts} cata={cata}/>
        <CategoryPage/>
      </div>
    )
  );
}

export default ProductFromCategoryPage;
