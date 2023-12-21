import React, { Profiler } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ProductPage from "./Pages/ProductPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import CartPage from "./Pages/CartPage";
import CheckOutPage from "./Pages/CheckOutPage";
function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainPage></MainPage>}></Route>
      <Route path="/product/:id" element={<ProductPage></ProductPage>}></Route>
      <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/cart" element={<CartPage></CartPage>}></Route>
      <Route path="/checkOut" element={<CheckOutPage></CheckOutPage>}></Route>
    </Routes>
  );
}

export default Routing;
