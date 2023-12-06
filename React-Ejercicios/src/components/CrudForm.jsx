import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  name: "",
  constellation: "",
};

const CrudForm = ({createData,updateData,datoToEdit,setDataToEdit}) => {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.name || !form.constellation) {
      alert('Datos Incompletos')
      return;
    }
    //Si el id es null entonces significa que deseamos crear un nuevo registro, caso contrario actualizarlo
    if(form.id === null) {
      createData(form)
    }else {
      updateData(form)
    }

    handleReset()

  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = (e) => {
    setForm(initialForm)
    setDataToEdit(null)
  };

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
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </>
  );
};

export default CrudForm;
