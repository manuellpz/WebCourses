import React, { useRef } from "react";

export default function Referencias() {
  const refMenu = useRef();
  const refMenuBtn = useRef();

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias En React</h2>
      <button ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <nav ref={refMenu} style={{ display: "none" }}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
        <br />
      </nav>
    </>
  );
}
