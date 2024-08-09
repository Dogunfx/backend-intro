"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MyCard from "./components/productcard";
import { Input, Typography } from "antd";

export default function OnlineStore() {
  const [products, setProducts] = useState([]);

  useEffect(simpleHandler, []);

  function simpleHandler() {
    handleBackendRequest();
  }

  async function handleBackendRequest() {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
  }

  function handleMap(arrayItem) {
    return <MyCard product={arrayItem} key={arrayItem.id} />;
  }

  return (
    <main>
      <Typography.Title className="text-center">
        My Shopping Site
      </Typography.Title>
      <Input.Search
        placeholder="Enter Product name"
        className="w-3/4 block mx-auto text-center"
      />
      <div className="sm:flex flex-wrap justify-center">
        {products.map(handleMap)}
      </div>
    </main>
  );
}
