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

function MyCard({ product }) {
  return (
    <Card
      cover={
        <Image
          src={product?.image}
          alt="product name"
          height={200}
          width={200}
        />
      }
      className="sm:w-1/4  m-4  flex flex-col justify-between "
    >
      <Typography.Title level={3}> {product?.title} </Typography.Title>
      <p>{product?.description}</p>
      <div className="flex justify-between">
        <p>
          <strong>NGN {product?.price}</strong>
        </p>
        <Button type="primary" size="small">
          Buy Now
        </Button>
      </div>
    </Card>
  );
}
