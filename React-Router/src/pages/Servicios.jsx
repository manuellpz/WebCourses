import { Link, Outlet } from "react-router-dom";

export function Servicios() {
  return (
    <>
      <h1>Servicios</h1>
      <nav className="menu">
        <Link to="/servicios">Inicio</Link>
        <Link to="/servicios/lista">Lista</Link>
        <Link to="/servicios/garantias">Garantía</Link>
        <Link to="/servicios/politica">Políticas</Link>
      </nav>
      <Outlet />
    </>
  );
}
