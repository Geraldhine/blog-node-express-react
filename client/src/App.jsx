import React from 'react'; 
import './App.css';
import NuevoArticulo from './admin/Pages/NuevoArticulo';
import BlogAdminitrar from './admin/Pages/BlogAdministrar';
import PaginaArticulo from './home/Pages/MiPrimerArticulo';
import { Route, Routes } from 'react-router';


function App() {

return (
  <>
   <Routes>
      <Route path="/Articulo/:id" element={<PaginaArticulo />} />
      <Route path="/admin" element={<BlogAdminitrar />} />
      <Route path="/nuevoArticulo" element={<NuevoArticulo />} />
    </Routes>
  </>
  );
}


export default App;
