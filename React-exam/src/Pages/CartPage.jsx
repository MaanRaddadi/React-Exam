import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Categoreys from "../Components/Categoreys";
import CartCard from "../Components/CartCard";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/carts/5").then((res) => {
      setCartItem(res.data.products);

      setLoading(false);
    });
  }, []);

  const getItems = () => {
    if (loading) return;
    cart.forEach((item) => {
      console.log(item);
    });
  };

  return (
    <>
      <NavBar></NavBar>
      <Categoreys></Categoreys>

      <h1 className="text-black text-center font-bold text-4xl mt-5">
        Current Cart :
      </h1>
      <div className="flex w-full justify-center items-center">
        <button
          className="btn text-white bg-[#00453e] mt-5 "
          onClick={() => {
            navigate("/checkOut");
          }}
        >
          Check Out
        </button>
      </div>
      <div className="flex justify-center items-center  gap-5 p-5 mt-16 max-sm:flex-wrap">
        {cartItem.map((product, index) => {
          return <CartCard key={index} product={product}></CartCard>;
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default CartPage;
