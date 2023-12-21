import { useNavbar } from "@nextui-org/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function SignUp() {
  const [userInput, setUserInput] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handelUsername = (e) => {
    const usernameRegex = /^[a-z0-9_-]{3,15}$/;
    if (!e.target.value.match(usernameRegex)) {
      setError({ ...error, username: "Invalid Username" });
    } else {
      setError({ ...error, username: "" });
      setUserInput({ ...userInput, username: e.target.value });
    }
  };
  const handelEmail = (e) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!e.target.value.match(emailRegex)) {
      setError({ ...error, email: "Invalid Email" });
    } else {
      setError({ ...error, email: "" });
      setUserInput({ ...userInput, email: e.target.value });
    }
  };
  const handelPassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!e.target.value.match(passwordRegex)) {
      setError({ ...error, password: "Invalid password" });
    } else {
      setError({ ...error, password: "" });
      setUserInput({ ...userInput, password: e.target.value });
    }
  };

  const register = (e) => {
    e.preventDefault();
    axios
      .post(`https://fakestoreapi.com/users`, {
        email: userInput.email,
        username: userInput.username,
        password: userInput.password,
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      })
      .then((res) => {
        if (res) {
          navigate("/login");
        }
      });
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg)",
        }}
      >
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
              onChange={handelUsername}
            />
            <span className="text-red-500">{error.username}</span>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
              onChange={handelEmail}
            />
            <span className="text-red-500">{error.email}</span>
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
              onChange={handelPassword}
            />
            <span className="text-red-500">{error.password}</span>
          </div>
          <span className="text-white">
            Already have an Account ?{" "}
            <Link to={"/login"} className="text-blue-400">
              Login
            </Link>
          </span>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={register}>
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
