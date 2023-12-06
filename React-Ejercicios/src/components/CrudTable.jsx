import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data }) => {
  return (
    <>
      <h3>REGISTROS</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={3}>Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} cab={el} />)
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
