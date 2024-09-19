"use client";
import { useContext } from "react";
import { CounterContext } from "../store/counter";
import { Typography, Image, Button } from "antd";

export default function CartListPage() {
  const { cartList } = useContext(CounterContext);
  function handleMap(arrayItem) {
    return (
      <div
        key={arrayItem.id}
        className="flex shadow-md bg-white my-4 items-center px-3 rounded"
      >
        <div>
          <Image
            preview={false}
            width={100}
            src={arrayItem.thumbnail}
            alt="thumbnail"
          />
        </div>
        <div className="p-3">
          <Typography.Title level={5}>{arrayItem.title}</Typography.Title>
          <p className="text-slate-500 text-sm">{arrayItem.description}</p>
          <Button className="bg" size="small">
            {arrayItem.availabilityStatus}
          </Button>
        </div>
        <div className="flex">
          <Button size="small">-</Button>
          <span className="px-2 border bg-white">{arrayItem.quantity}</span>
          <Button size="small">+</Button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Typography.Title className="text-center">
        My Shopping list
      </Typography.Title>
      <div className="container w-1/2 p-3 mx-auto">
        {cartList.map(handleMap)}
      </div>
    </div>
  );
}
