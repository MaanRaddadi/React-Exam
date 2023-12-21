import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Categoreys from "../Components/Categoreys";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Image } from "@nextui-org/react";
import Footer from "../Components/Footer";
function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  
  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
    });
  };

  const addToCart = (productId)=>{

  }


  return (
    <>
      <NavBar></NavBar>
      <Categoreys></Categoreys>
      <div className="w-full bg-white flex justify-center items-center p-10 gap-5 max-md:flex-wrap relative">
        <button
          className="btn bg-[#195851] text-white absolute top-5 left-5 "
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </button>
        <Image
          isZoomed
          width={320}
          alt="NextUI Fruit Image with Zoom"
          src={product.image}
          className="mt-10"
        />
        <div className="flex flex-col items-start h-full gap-2 w-full">
          <h1 className="font-bold text-4xl ">{product.title}</h1>
          <p className="w-96 max-sm:w-48">{product.description}</p>
          <span className="badge badge-neutral text-white px-2">
            {product.category}
          </span>
          <h1 className="text-2xl font-bold">{product.price} $</h1>
          <div className="flex gap-5 flex-wrap">
          <input placeholder="Quantity" className="input input-bordered"></input>
          <button className="btn bg-[#195851] text-white" onClick={()=>{
            addToCart(product)
          }}>
            Add to Cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
            
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ProductPage;
