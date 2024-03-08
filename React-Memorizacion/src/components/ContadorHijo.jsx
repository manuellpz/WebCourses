import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  console.log("Hijo Contador se renderiza");

  const superNumero = useMemo(()=>{
      let numero = 0

      for(let i=0;i<1000000000;i++) {
        numero++
      }

      return numero

  },[])



  return (
    <div style={{ border: "thin solid #000", padding: "1rem", margin: "1rem" }}>
      <h2>Hijo del Contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
