import React, { useState } from "react";
import { Button } from "../Buttons/Button";

export default function Counter() {
  let [count, setCount] = useState(0);
  const handleOnClick = (evtType) => {
    if (evtType == "ADD") {
      console.log("ADD");
      setCount(count + 1);
      return;
    }
    console.log("Subtract");
    setCount(count - 1);
  };
  return (
    <>
      <span>Counter: {count}</span>
      <Button
        label={"+"}
        onClick={() => handleOnClick("ADD")}
        backgroundColor={"#2B860B"}
      />
      <Button
        label={"-"}
        onClick={() => handleOnClick("")}
        backgroundColor={"#2B860B"}
      />
    </>
  );
}
