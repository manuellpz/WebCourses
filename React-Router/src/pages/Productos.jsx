import { Link } from "react-router-dom";

export const Productos = ({productos}) => {

   return ( 
      <section>
         <h2>Productos</h2>
         <ul>
            {productos.map(el => {
               return <li key={el.id}>
                  <Link to={`/productos/${el.id}`}>{el.name}</Link>
               </li>
            })}
         </ul>
      </section>
    );
}