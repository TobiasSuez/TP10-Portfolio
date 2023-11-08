import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Componentes/Home";
import MasInfo from "./Componentes/InfoUstedes";
import MisCeaciones from "./Componentes/MisCreaciones";
import Favoritos from "./Componentes/Favoritos";
import InicioSesion from "./Componentes/InicioSesion";
import ContenidoProtegido from "./Componentes/ContenidoProtegido";
import DetallesProyecto from "./Componentes/DetallesProyecto ";

function App() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);

  const iniciarSesion = () => {
    // Simulación de lógica de inicio de sesión
    setUsuarioAutenticado(true);
  };

  const cerrarSesion = () => {
    // Simulación de cierre de sesión
    setUsuarioAutenticado(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              usuarioAutenticado ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/Home" element={<Home />} />
          <Route path="/MasInfo" element={<MasInfo />} />
          <Route path="/MisCreaciones" element={<MisCeaciones />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path= '/DetallesProyecto/:id' element={<DetallesProyecto />} /> 

          <Route
            path="/login"
            element={<InicioSesion iniciarSesion={iniciarSesion} />}
          />
          <Route
            path="/contenidoProtegido"
            element={
              usuarioAutenticado ? (
                <ContenidoProtegido cerrarSesion={cerrarSesion} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
