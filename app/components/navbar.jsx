"use client";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { useContext } from "react";
import { CounterContext } from "../store/counter";
export default function NavBar() {
  const { counter } = useContext(CounterContext);
  return (
    <FloatButton
      type="primary"
      icon={<ShoppingCartOutlined />}
      badge={{ count: counter }}
    />
  );
}
