import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
import "./App.css";
import { Home } from "./pages/Home";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./pages/Error404";
import { Productos } from "./pages/Productos";
import {DetalleProducto} from './pages/DetalleProducto'
import {Servicios} from './pages/Servicios'

function App() {
  const [productos, setProductos] = useState([
      {id:1, name:"Producto 1", price:100},
      {id:2, name:"Producto 2", price:200},
      {id:3, name:"Producto 3", price:300},
      {id:4, name:"Producto 4", price:400},
      {id:5, name:"Producto 5", price:500}
   ])

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
          <Route path="/about" element={<Navigate to="/acerca"/>}/>
          <Route path="/productos" element={<Productos productos={productos}/>}/>
          <Route path="/productos/:id" element={<DetalleProducto productos={productos}/>}/>
          <Route path="/servicios" element={<Servicios />}>
              <Route index element={<h2>Este es el home de servicios</h2>}/>
              <Route path="/servicios/garantias" element={<h2>Garantia de nuestros servicios</h2>} />
              <Route path="/servicios/lista" element={<h2>Esta es la lista de nuestros servicios</h2>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
