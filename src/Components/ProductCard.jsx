import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {


  const addToCart = (product) => {

  };

  return (
    <>
      <div className="card w-96 max-h-[32rem] h-[32rem] bg-white rounded-none shadow-xl">
        <figure>
          <img
            src={product.image}
            alt="Shoes"
            className="w-52 max-w-[13rem] max-h-60 object-contain object-center"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="font-bold">{product.price} $</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${product.id}`}>
              {" "}
              <button
                className="btn bg-[#195851] text-white"
                onClick={() => {
                  addToCart(product);
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
