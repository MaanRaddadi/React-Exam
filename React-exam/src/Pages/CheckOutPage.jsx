import React from "react";
import NavBar from "../Components/NavBar";
import Categoreys from "../Components/Categoreys";
import axios from "axios";
import CheckoutProducts from "../Components/CheckoutProducts";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
function CheckOutPage() {
  const [cartItem, setCartItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios.get("https://fakestoreapi.com/carts/5").then((res) => {
      setCartItem(res.data.products);

      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Categoreys></Categoreys>
      <div className="flex w-full justify-center items-center flex-wrap gap-10 relative">
        <CheckoutProducts products={cartItem}></CheckoutProducts>
        <div className="w-1/2 flex flex-col mt-10">
          <h1 className="text-3xl ">Shipping Info</h1>
          <label>Address .1</label>
          <input
            className="input bg-gray-200 "
            placeholder="street name"
          ></input>
          <label>Address .2</label>
          <input
            className="input bg-gray-200 "
            placeholder="Apt, Building"
          ></input>
          <label>City</label>
          <input
            className="input input-bordered bg-gray-200 "
            placeholder="City"
          ></input>
          <label>Country</label>
          <select className="select select-bordered w-full max-w-xs bg-gray-200">
            <option disabled selected>
              City
            </option>
            <option>Medinah</option>
            <option>Riyadh</option>
            <option>Jeddah</option>
            <option>Dammam</option>
            <option>Khobar</option>
          </select>
          <h1 className="text-3xl mt-5 ">Payment Info</h1>

          <label>Card Number</label>
          <input
            className="input bg-gray-200 "
            placeholder="1234 5678 9800"
          ></input>
          <label>Card Holder Name</label>
          <input
            className="input bg-gray-200 "
            placeholder="Name on Card"
          ></input>
          <label>Issue Date</label>
          <input className="input bg-gray-200 w-24 " type="date"></input>
          <label>CVV</label>
          <input
            className="input input-bordered bg-gray-200 w-24 "
            placeholder="123"
          ></input>
          <button></button>
          <button
            onClick={() => {
              alert("Your order has been sent");
              navigate("/");
            }}
            className="btn bg-[#195851] text-white w-40 mt-3 mb-10 "
          >
            Check Out Now
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CheckOutPage;
