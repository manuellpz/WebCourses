import React from "react";
import styled from "styled-components";

//Estilos CSS con Styled-Components
let mainColor = "#db7093",
  mainColor80 = "#db709380";

const setTransitionTime = (time) => `all ${time} ease-in-out`;

const MyH3 = styled.h3`
  padding: 2rem;
  text-align: center;
  background: ${mainColor};
  transition: ${setTransitionTime("0.5s")};
  &:hover {
    background: ${mainColor80};
  }
`;

export default function ComponentesEstilizados() {
  return (
    <>
      <h2>Styled Components in React</h2>
      <MyH3>Soy un elemento estilizado con styled-components</MyH3>
    </>
  );
}
