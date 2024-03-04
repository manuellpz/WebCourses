import { useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {

   const sumar = () => {
      setValue(value + 1)
   }
   const restar = () => {
      setValue(value - 1)
   }

   const [value, setValue] = useState(0);

  return (
    <>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{value}</h3>
      <ContadorHijo />
    </>
  );
};

export default Contador;
