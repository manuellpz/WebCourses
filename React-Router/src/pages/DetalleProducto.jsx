import { useParams, useNavigate } from "react-router-dom";

export const DetalleProducto = () => {
   const getItem = id => {
      const items = [
         {id:1, name:"Producto 1", price:100},
         {id:2, name:"Producto 2", price:200},
         {id:3, name:"Producto 3", price:300},
         {id:4, name:"Producto 4", price:400},
         {id:5, name:"Producto 5", price:500}
      ]

      return items.find(el => el.id.toString() === id)
   }

   const handleGoBack = () => {
      navigate(-1)
   }

   const { id } = useParams()
   const item = getItem(id)
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