import { Divider } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CheckoutProducts({ products }) {
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getProdDetails();
  }, []);

  const getProdDetails = () => {
    setLoading(true)
    for (let i = 0; i < products.length; i++) {
      axios
        .get(`https://fakestoreapi.com/products/${products[i].productId}`)
        .then((res) => {

          setProductDetail([...productDetail, res.data])
        });
    } 
    setLoading(false)
  
  };

  return (
    <>
      <ul className="menu bg-base-200 w-56 rounded-box ">
      { productDetail && loading ===false &&
        productDetail.map((product, index)=>{
          return(
            <>
            <li key={index}>
            <div className="flex">
              <img className="w-10" src={product.image}></img>
              <p>{product.title}</p>
            </div>
          </li>
          <Divider/>
          </>
          )
        })
       }
      </ul>
    </>
  );
}

export default CheckoutProducts;
