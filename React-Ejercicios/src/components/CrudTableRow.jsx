const crudTableRow = ({cab,setDataToEdit,deleteData}) => {
  return (
    <tr>
      <td>{cab.name}</td>
      <td>{cab.constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(cab)}>Editar</button>
        <button onClick={() => deleteData(cab.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default crudTableRow;
