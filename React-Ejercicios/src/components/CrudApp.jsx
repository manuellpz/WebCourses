import React, { useState } from 'react';
import caballerosDB from "../helpers/CaballerosZodiaco.json"
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApp = () => {
  const [db,setDb] = useState(caballerosDB)
  return (
    <>
      <h2>CRUD APP</h2>
      <CrudForm />
      <CrudTable data={db}/>
    </>
  );
};

export default CrudApp;
