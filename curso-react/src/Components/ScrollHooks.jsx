import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moviendo El Scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    console.log("fase de montaje");
  }, []);

  useEffect(() => {
    console.log("fase de actualizacion");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect Y El Ciclo De Vida</h2>
      <p>Scroll Y Del Navegador: {scrollY} px</p>
    </>
  );
}
