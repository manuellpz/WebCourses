import { useParams } from "react-router-dom";

export const DetalleServicios = ({servicios}) => {

   const { id } = useParams()
   const item = servicios.find(el => el.id.toString() === id)

   return ( 
      <section className="detalleProducto">
         <h1>Detalle Del Servicio</h1>
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>PRECIO</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
               </tr>
            </tbody>
         </table>
      </section>
    );
}