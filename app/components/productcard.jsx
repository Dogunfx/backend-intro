import { Button, Card, Image, Input } from "antd";
import { useContext, useState } from "react";
import { CounterContext } from "../store/counter";

export default function MyCard({ product }) {
  const { counter, setCounter } = useContext(CounterContext);

  function handleClick() {
    const newCa = counter + 1;
    setCounter(newCa);
  }
  return (
    <Card title={product.title} className="sm:w-1/4 m-3">
      <Image src={product.image} alt="Product Image" height={200} />
      <p className="font-bold text-2xl">NGN {product.price}</p>
      <div className="flex justify-between">
        <Button type="primary" onClick={handleClick}>
          Buy now
        </Button>
        <a href={"viewproduct/" + product.id}>VIew More</a>
      </div>
    </Card>
  );
}
