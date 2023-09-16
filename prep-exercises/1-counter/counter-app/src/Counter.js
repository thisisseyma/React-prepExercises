import React, { useState } from "react";
import Count from "./Count.js";
import Button from "./Button.js";

function Counter() {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Counter App</h1>
      <Count count={count} feedback={feedback} />
      <Button increment={increment} />
    </div>
  );
}

export default Counter;
