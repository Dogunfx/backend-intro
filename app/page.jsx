"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MyCard from "./components/productcard";
import { Input, Spin, Typography } from "antd";
import { find } from "lodash";
import { CounterContext } from "./store/counter";

export default function OnlineStore() {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  const { cartList } = useContext(CounterContext);

  useEffect(simpleHandler, []);

  function simpleHandler() {
    handleBackendRequest();
  }

  async function handleBackendRequest() {
    // https://dummyjson.com/products
    const res = await axios.get("https://dummyjson.com/products?limit=50");
    // const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data.products);
    setFetching(false);
  }

  function handleMap(arrayItem) {
    if (find(cartList, arrayItem)) {
      return (
        <MyCard product={arrayItem} key={arrayItem.id} showCounter={true} />
      );
    } else {
      return (
        <MyCard product={arrayItem} key={arrayItem.id} showCounter={false} />
      );
    }
  }

  return (
    <main className="bg-slate-300">
      <Typography.Title className="text-center">
        My Shopping Site
      </Typography.Title>
      <Input.Search
        placeholder="Enter Product name"
        className="w-3/4 block mx-auto text-center"
      />
      {fetching ? (
        <div className="text-center">
          <Spin />
        </div>
      ) : (
        <div className="sm:flex flex-wrap justify-center">
          {products.map(handleMap)}
        </div>
      )}
    </main>
  );
}
