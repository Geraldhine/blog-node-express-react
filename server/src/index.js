import express from 'express';
import rutasUsuarios from './routes/usuarios.routes.js';
import rutasArticulos from './routes/articulos.routes.js';
import indexRoutes from './routes/index_routes.js';
import { probarConexion } from './conexion.js'; // 👉 Importar función
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

// Ejecutar prueba de conexión
await probarConexion();

app.use(indexRoutes);
app.use('/api', rutasUsuarios);
app.use('/api', rutasArticulos);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto: ${PORT}`);
});
