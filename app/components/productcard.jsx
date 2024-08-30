import { Button, Card, Image } from "antd";
import { useContext, useState } from "react";
import { CounterContext } from "../store/counter";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function MyCard({ product, showCounter }) {
  const { addToCart, removeFromCart } = useContext(CounterContext);
  const [hasClick, setHasClick] = useState(showCounter);
  const [num, setNum] = useState(1);

  function handleButtonClick() {
    addToCart(product);
    setHasClick(true);
  }

  function increaseNum() {
    const newNum = num + 1;
    setNum(newNum);
  }

  function decreaseNum() {
    const newNum = num - 1;
    if (newNum >= 1) {
      setNum(newNum);
    }

    if (newNum == 0) {
      removeFromCart(product);
      setHasClick(false);
    }
  }

  return (
    <Card title={product.title} className="sm:w-1/4 m-2">
      <Image
        src={product.thumbnail}
        alt="Product Image"
        height={200}
        className="drop-shadow-[10px_0px_20px_#0007]"
      />
      <p className="text-xs">
        NGN <span className="text-4xl font-bold"> {product.price}</span>
      </p>
      <div className="flex justify-between">
        <a href={"viewproduct/" + product.id}>VIew More</a>
        {hasClick == true ? (
          <div className="flex w-1/4">
            <Button size="small" onClick={decreaseNum}>
              -
            </Button>
            <span className="border px-2">{num}</span>
            <Button size="small" onClick={increaseNum}>
              +
            </Button>
          </div>
        ) : (
          <Button
            type="primary"
            onClick={handleButtonClick}
            icon={<ShoppingCartOutlined />}
          >
            Add to cart
          </Button>
        )}
      </div>
    </Card>
  );
}
