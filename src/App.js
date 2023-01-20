import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./paginas/Dashboard";
import Usuarios from "./paginas/Usuarios";
import Productos from "./paginas/Productos";
import Login from './componentes/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
