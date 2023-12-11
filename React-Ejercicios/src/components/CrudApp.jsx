import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

let caballerosDB = [
  {
    id: 1,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 2,
    name: "Shun",
    constellation: "Andromeda",
  },
  {
    id: 3,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 4,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(caballerosDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = confirm(
      `¿Estás seguro de eliminar el elemento con el ID: ${id}?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </>
  );
};

export default CrudApp;
