import { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {

  const [value, setValue] = useState(0);
  const [input, setInput] = useState("");
  //  const sumar = () => {
  //     setValue(value + 1)
  //  }
  //  const restar = () => {
  //     setValue(value - 1)
  //  }

  const sumar = useCallback(() => setValue(value + 1), [value]);
  const restar = useCallback(() => setValue(value - 1), [value]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  

  return (
    <>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{value}</h3>
      <input type="text" onChange={handleChange} value={input} />
      <ContadorHijo contador={value} sumar={sumar} restar={restar} />
    </>
  );
};

export default Contador;
