import React, { useState } from "react";

export default function ContadorHooks() {
  const [counter, setCounter] = useState(0);

  const add = () => setCounter(counter + 1);
  const substract = () => setCounter(counter - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
      </nav>
      <h3>{counter}</h3>
    </>
  );
}
