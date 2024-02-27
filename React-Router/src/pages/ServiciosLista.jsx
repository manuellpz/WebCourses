import { Link } from "react-router-dom";

const ServiciosLista = ({servicios}) => {
   return (
      <>
         <h2>Conoce nuestros servicios</h2>
         <ul>
            {servicios.map(el => {
               return <li key={el.id}>
                  <Link to={`/servicios/${el.id}`}>{el.name}</Link>
               </li>
            })}
         </ul>
      </>
   );
}
 
export default ServiciosLista;