"use client";
import { createContext, useState } from "react";

export const CounterContext = createContext();

export default function Counter({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(product) {
    const newCartList = [...cartList, product];
    setCartList(newCartList);
  }

  function removeFromCart(product) {
    const newCartList = cartList.filter((item) => {
      handleFilter(item, product);
    });
    setCartList(newCartList);
  }

  function handleFilter(arrayItem, product) {
    if (arrayItem.id != product.id) {
      return arrayItem;
    }
  }
  return (
    <CounterContext.Provider
      value={{ cartList, setCartList, addToCart, removeFromCart }}
    >
      {children}
    </CounterContext.Provider>
  );
}
