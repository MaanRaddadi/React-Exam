import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Categoreys from "../Components/Categoreys";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import Footer from "../Components/Footer";
function MainPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResult , setSearchResult]= useState([])
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProductList(res.data);
      setSearchResult(res.data)
      setLoading(false);
    });
  };

const handelSearch = (e)=>{
  if(e.target.value === ""){
    setSearchResult(productList)
  } else{
    const res =  productList.filter((item)=>{
      return item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.category.toLowerCase().includes(e.target.value.toLowerCase())
       })
       setSearchResult(res)
  }
 
  
}




  return (
    <>
      <NavBar></NavBar>
      <Categoreys></Categoreys>
      
      <Header></Header>
      
      <div className="w-full flex justify-center items-center">
      <input className="input input-bordered bg-red mt-10 mb-5 bg-gray-100" placeholder="Search Name, Category" onChange={handelSearch}></input>
      </div>
      <div className="flex w-full justify-center items-center flex-wrap gap-10  bg-white p-2">
        
        {loading === false &&
          searchResult.map((product, index) => {
            return <ProductCard key={index} product={product}></ProductCard>;
          })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default MainPage;
