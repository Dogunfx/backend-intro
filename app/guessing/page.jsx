"use client";
import { Button, Card, Input, Typography, message } from "antd";
import { useState } from "react";

export default function GuessingAge() {
  const [answer, setAnswer] = useState();

  function handleCheck() {
    if (answer == 22) {
      message.success("Correct");
    } else {
      message.error("Wrong");
    }
  }

  function handleChange(evt) {
    setAnswer(evt.target.value);
  }

  return (
    <main>
      <Card title="My Guessing Game" className="w-1/2 mx-auto my-52">
        <Typography.Title level={3}>Try Guessing my Age</Typography.Title>
        <Input placeholder="Guess my Age" onChange={handleChange} />
        <Button onClick={handleCheck} type="primary" className="mt-5">
          Check Answer
        </Button>
      </Card>
    </main>
  );
}
