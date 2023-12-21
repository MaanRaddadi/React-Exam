import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";

function CartCard({ product }) {
  const [productDetails, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState(product.quantity);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${product.productId}`)
      .then((res) => {
        
        setProductDetail(res.data);
      });

  }, []);

  const deleteFromCart = () => {
    setProductDetail(null);
  };

  return (
    <>
      {productDetails !== null ? (
        <Card className="py-4   ">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large w-48">
              {productDetails.title}
            </h4>
            <small className="text-default-500 text-lg">
              {productDetails.price} $
            </small>
            <div className="flex mb-5 justify-center items-center">
              <input
                type="number"
                value={quantity}
                className="input border-1 w-16"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              ></input>
              <button className="btn bg-[#00453e] text-white btn-sm">
                Update Quantity
              </button>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-contain rounded-xl max-h-52"
              src={productDetails.image}
              width={270}
            />
          </CardBody>
          <CardFooter>
            <Button
              color="danger"
              onClick={() => {
                deleteFromCart();
              }}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ) : (
        ""
      )}
    </>
  );
}

export default CartCard;
