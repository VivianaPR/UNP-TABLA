import './App.css';
import { OrdenTrabajo } from './Panel/Lista-AR/lista_ot';
import { Estandar } from './Panel/Estandar/Formulario';
import { Routes, Route } from 'react-router-dom';
import { VentanaLienzo } from 'eco-unp/ui';

function App() {
  return (
    <VentanaLienzo>
      <Routes>
        <Route path="/" element={<OrdenTrabajo />} />
        <Route path="/estandar" element={<Estandar />} />
      </Routes>
    </VentanaLienzo>
  );
}

export default App;
