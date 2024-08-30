"use client";
import { useContext } from "react";
import { CounterContext } from "../store/counter";

export default function CartListPage() {
  const { cartList } = useContext(CounterContext);
  function handleMap(arrayItem) {
    return <p>Product :::: {arrayItem.title}</p>;
  }
  return <div>{cartList.map(handleMap)}</div>;
}
