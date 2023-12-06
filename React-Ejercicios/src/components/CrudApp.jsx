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
    setDb([
      ...db,
      data,
    ]);
  };

  const updateData = (data) => {};

  const deleteData = (id) => {};

  return (
    <>
      <h2>CRUD APP</h2>
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
    </>
  );
};

export default CrudApp;
