const crudTableRow = ({cab}) => {
  return (
    <tr>
      <td>{cab.name}</td>
      <td>{cab.constellation}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default crudTableRow;
