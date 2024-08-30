"use client";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { useContext } from "react";
import { CounterContext } from "../store/counter";
import Link from "next/link";
export default function NavBar() {
  const { cartList } = useContext(CounterContext);

  return (
    <Link href="/cartlist">
      <FloatButton
        type="primary"
        icon={<ShoppingCartOutlined />}
        badge={{ count: cartList.length }}
      />
    </Link>
  );
}
