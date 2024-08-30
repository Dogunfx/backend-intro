"use client";

import { Card, Typography, Image } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  function simpleHandler() {
    fetchSingleProduct();
  }

  async function fetchSingleProduct() {
    try {
      const res = await axios.get("https://dummyjson.com/products/" + id);
      setProduct(res.data);
    } catch (error) {
      window.location.href = "/";
    }
  }

  useEffect(simpleHandler, []);

  return (
    <Card title={product.title} className="sm:w-1/3 my-5 mx-auto">
      <div className="text-center">
        <Image src={product.thumbnail} alt="Product Image" height={200} />
      </div>
      <p>{product.description}</p>
      <div className="flex justify-between ">
        <Typography.Title level={3} className="text-center">
          NGN {product.price}
        </Typography.Title>
        <a
          href="/"
          className="rounded bg-blue-600  text-white px-3 py-2 hover:bg-white hover:text-blue-600"
        >
          Continue Shopping
        </a>
      </div>
    </Card>
  );
}
