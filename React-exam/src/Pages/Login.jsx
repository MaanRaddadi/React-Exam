import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [userInput, setUserInput] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handelInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username: userInput.username,
        password: userInput.password,
      })
      .then((res) => {
        if (res) {
          localStorage.setItem("user", JSON.stringify(userInput));
          navigate("/");
        }
      })
      .catch((error) => {
        setError("Invalid Username or password");
      });
  };

  return (
    <>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage:
            "url(https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg)",
        }}
      >
        <h1 className="text-5xl font-bold text-white absolute top-10">Login</h1>
        <div className="hero-overlay bg-opacity-60"></div>

        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              name="username"
              className="input input-bordered"
              required
              onChange={handelInput}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
              onChange={handelInput}
            />
          </div>
          <small className="text-red-500 font-bold text-md ">{error}</small>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={login}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
