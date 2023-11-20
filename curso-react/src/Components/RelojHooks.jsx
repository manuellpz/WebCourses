import React, { useState, useEffect } from "react";

export default function RelojHooks(props) {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  let timer = null;

  useEffect(() => {
    if (visible) {
      timer = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      console.log("Fase De Desmontaje");
    };
  }, [visible]);

  return (
    <>
      <h2>Reloj Usando Hooks</h2>
      <p>{visible && hora}</p>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        Iniciar
      </button>
      <button
        onClick={() => {
          setVisible(false);
        }}
      >
        Detener
      </button>
    </>
  );
}
