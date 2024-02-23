import { useParams, useNavigate } from "react-router-dom";

export const DetalleProducto = ({productos}) => {
   

   const handleGoBack = () => {
      navigate(-1)
   }

   const { id } = useParams()
   const item = productos.find(el => el.id.toString() === id)
   const navigate = useNavigate()

   return ( 
      <section className="detalleProducto">
         <h1>Detalle Del Producto</h1>
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
         <br />
         <button className="btn-regresar" onClick={handleGoBack}>Regresar</button>
      </section>
    );
}