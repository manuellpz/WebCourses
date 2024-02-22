import { Link } from "react-router-dom";

export const Productos = () => {
   
   const items = [
      {id:1, name:"Producto 1", price:100},
      {id:2, name:"Producto 2", price:200},
      {id:3, name:"Producto 3", price:300},
      {id:4, name:"Producto 4", price:400},
      {id:5, name:"Producto 5", price:500}
   ]


   return ( 
      <section>
         <h2>Productos</h2>
         <ul>
            {items.map(el => {
               return <li key={el.id}>
                  <Link to={`/productos/${el.id}`}>{el.name}</Link>
               </li>
            })}
         </ul>
      </section>
    );
}