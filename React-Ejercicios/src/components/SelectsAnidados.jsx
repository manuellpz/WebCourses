import React, { useState } from "react";

import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <SelectList
        title="Estados: "
        url=""
        handleChange={(e) => {
          setState(e.target.value);
        }}
      />
      {state && (
        <SelectList
          title="Municipios: "
          url=""
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        />
      )}
      {town && (
        <SelectList
          title="Colonias: "
          url=""
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default SelectsAnidados;
