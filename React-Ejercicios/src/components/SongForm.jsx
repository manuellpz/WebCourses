import React, { useState, useEffect } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  };
  const handleSubmit = e => {
    e.preventDefault()
    if(!form.artist || !form.song) {
      alert("Datos Incompletos, Favor de verificar los campos")
      return;
    }

    handleSearch(form)
    setForm(initialForm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del artista: "
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la cancion: "
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
