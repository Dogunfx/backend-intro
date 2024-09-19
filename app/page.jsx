"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MyCard from "./components/productcard";
import { Input, message, Spin, Typography } from "antd";

export default function OnlineStore() {
  const [products, setProducts] = useState([]);
  const [copy, setCopy] = useState([]);
  const [fetching, setFetching] = useState(true);
  useEffect(simpleHandler, []);

  function simpleHandler() {
    handleBackendRequest();
  }

  async function handleBackendRequest() {
    const res = await axios.get("https://dummyjson.com/products?limit=50");
    setProducts(res.data.products);
    setCopy(res.data.products);
    setFetching(false);
  }

  function handleMap(arrayItem) {
    return <MyCard product={arrayItem} key={arrayItem.id} />;
  }

  var word;
  function handleSearcher(evt) {
    word = evt.target.value;
    const newProducts = copy.filter(handleFilter);
    setProducts(newProducts);
  }

  function handleFilter(product) {
    if (product.title.toLowerCase().includes(word)) {
      return product;
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
        onChange={handleSearcher}
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
