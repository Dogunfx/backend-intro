"use client";

import { useEffect, useState } from "react";
import {
  Card,
  Image,
  Input,
  Spin,
  Button,
  Typography,
  FloatButton,
} from "antd";
import axios from "axios";

export default function MyApp() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  fetchProductsUsingAxios();

  async function fetchProductsUsingAxios() {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setIsLoading(false);
  }

  function handleMap(product) {
    return <MyCard product={product} />;
  }

  return (
    <main>
      <Typography.Title className="text-center ">
        Data Coming from Backend End
      </Typography.Title>
      <Input.Search
        placeholder="Search Items"
        className="text-center w-3/5 mx-auto block"
      />
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <div className="sm:flex flex-wrap justify-center">
          {products.map(handleMap)}
        </div>
      )}
      <FloatButton type="primary" icon={"0"} />
    </main>
  );
}

function MyCard(props) {
  return <p>{props.product.title}</p>;
}
