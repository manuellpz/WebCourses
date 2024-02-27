import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Productos } from "./pages/Productos";
import { DetalleProducto } from "./pages/DetalleProducto";
import { Servicios } from "./pages/Servicios";
import ServiciosHome from "./pages/ServiciosHome";
import ServiciosGarantias from "./pages/ServiciosGarantias";
import ServiciosLista from "./pages/ServiciosLista";
import ServiciosPoliticas from "./pages/ServiciosPoliticas";
import { DetalleServicios } from "./pages/DetalleServicios";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
  ]);

  const [servicios, setServicios] = useState([
    { id: 1, name: "Servicio 1", price: 1000 },
    { id: 2, name: "Servicio 2", price: 2000 },
    { id: 3, name: "Servicio 3", price: 3000 },
    { id: 4, name: "Servicio 4", price: 4000 },
    { id: 5, name: "Servicio 5", price: 5000 },
  ]);

  return (
    <>
      <Header />

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          <Route
            path="/productos/:id"
            element={<DetalleProducto productos={productos} />}
          />
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />} />
            <Route path="garantias" element={<ServiciosGarantias />} />
            <Route path="lista" element={<ServiciosLista servicios={servicios}/>} />
            <Route path=":id" element={
              <>
                <ServiciosLista servicios={servicios} />
                <DetalleServicios servicios={servicios} />
              </>
            }/>
            <Route path="politica" element={<ServiciosPoliticas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
