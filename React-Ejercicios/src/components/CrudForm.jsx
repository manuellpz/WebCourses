import React, { useState, useEffect } from 'react';

const initialForm = {
   id:null,
   name:"",
   constellation:""
}

const CrudForm = () => {

   const [form,setForm] = useState(initialForm)

  const handleSubmit = (e) => {};

  const handleChange = (e) => {};

  const handleReset = (e) => {};

  return (
    <>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre: "
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="constellation"
          placeholder="Constelación: "
          onChange={handleChange}
          value={form.constellation}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset}/>
      </form>
    </>
  );
};

export default CrudForm;
